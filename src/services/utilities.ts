import { Product } from './interface'

const calculations = (products: Product[]) => {
  const totalPrice =
    Math.round(
      products
        .map((product) => product.price * product.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue) *
        100,
    ) / 100
  const totalPriceWithDiscount =
    Math.round(
      products
        .map((product) => product.discountedPrice * product.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue) *
        100,
    ) / 100
  const totalDiscount =
    Math.round((totalPrice - totalPriceWithDiscount) * 100) / 100
  return { totalPrice, totalPriceWithDiscount, totalDiscount }
}

export { calculations }
