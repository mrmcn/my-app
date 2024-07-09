import { queryOptions } from '@tanstack/react-query'
import { instance } from '../api'
import { url } from '../api/url'
import { queryClient } from '../query-client'
import { queryKey } from './const'
import { MyCartProps, Product, Tokens } from './interface'
import { calculations } from './utilities'

const userCart = {
  cart: (): MyCartProps | null =>
    !localStorage.getItem('cart')
      ? null
      : JSON.parse(localStorage.getItem('cart')!),
  setCart: (value: MyCartProps) => {
    localStorage.setItem('cart', JSON.stringify(value))
    return null
  },
  removeCart: () => localStorage.removeItem('cart'),
  deleteProduct: (formData: FormData) => {
    const { itemId } = Object.fromEntries(formData) as {
      [k: string]: string
    }
    const cart = userCart.cart()
    const products = cart!.products.filter(
      (product) => product.id !== Number(itemId),
    )
    newCart(products)
    return null
  },
  editQuantity: (formData: FormData) => {
    const { quantity, itemId } = Object.fromEntries(formData) as {
      [k: string]: string
    }
    const cart = userCart.cart()
    const products = cart!.products.map((product) =>
      product.id === Number(itemId)
        ? {
            ...product,
            quantity:
              quantity === 'plus' ? product.quantity + 1 : product.quantity - 1,
          }
        : product,
    )
    newCart(products)
    return null
  },
  addProduct: (formData: FormData) => {
    const { buyProduct } = Object.fromEntries(formData) as {
      [k: string]: string
    }
    const cart = userCart.cart()
    const product: Product = JSON.parse(buyProduct)
    const discountedPrice = Math.round(
      product.price * ((100 - product.discountPercentage) / 100),
    )
    const newProduct = {
      ...product,
      quantity: 1,
      discountedPrice,
      total: product.price,
    }
    const products =
      cart === null
        ? [newProduct]
        : cart.products.filter((product) => product.id === newProduct.id)
            .length > 0
        ? cart.products
        : [...cart.products, newProduct]
    newCart(products)
    return null
  },
}

const auth = {
  userId: () =>
    !localStorage.getItem('userId')
      ? null
      : Number(JSON.parse(localStorage.getItem('userId')!)),
  tokens: (): Tokens | null =>
    !localStorage.getItem('tokens')
      ? null
      : JSON.parse(localStorage.getItem('tokens')!),
  setUserId: (value: number) =>
    localStorage.setItem('userId', JSON.stringify(value)),
  setTokens: (tokens: Tokens) =>
    localStorage.setItem('tokens', JSON.stringify(tokens)),
  removeUserData: () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('tokens')
  },
  check: (request: Request) => {
    const tokens = auth.tokens()

    if (!tokens?.token) {
      const params = new URLSearchParams()

      const value = new URL(request.url).pathname
      params.set('from', value)
      return params.toString()
    } else {
      return null
    }
  },
  refresh: async () =>
    auth.setTokens(await queryClient.fetchQuery(authRefreshOptions())),
}

function authRefreshOptions() {
  const tokens = auth.tokens()
  return queryOptions({
    queryKey: [queryKey.authRefresh],
    queryFn: (): Promise<Tokens> =>
      instance.post(url.authRefresh, {
        refreshToken: tokens!.refreshToken,
        expiresInMins: 90,
      }),
    gcTime: 60 * 60 * 1000,
  })
}

export { auth, userCart, authRefreshOptions }

const newCart = (products: Product[]) => {
  if (products!.length === 0) {
    userCart.removeCart()
    return null
  }
  const { totalPrice, totalPriceWithDiscount, totalDiscount } =
    calculations(products)
  const cart = {
    products,
    totalPrice,
    totalPriceWithDiscount,
    totalDiscount,
  }
  userCart.setCart(cart)
  return null
}
