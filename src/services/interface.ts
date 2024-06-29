import { ActionFunction, LoaderFunction } from 'react-router-dom'

interface Product {
  availabilityStatus: string
  brand: string
  category: string
  description: string
  dimensions: { width: number; height: number; depth: number }
  discountPercentage: number
  id: number
  images: string[]
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  minimumOrderQuantity: number
  price: number
  rating: number
  returnPolicy: string
  reviews: any[]
  shippingInformation: string
  sku: string
  stock: number
  tags: string[]
  thumbnail: string
  title: string
  warrantyInformation: string
  weight: number
  quantity: number
  discountedPrice: number
}

interface Person {
  address: {
    address: string
    city: string
    state: string
    postalCode: string
  }
  birthDate: string
  email: string
  firstName: string
  gender: string
  lastName: string
  password: string
  phone: string
  userId: string
  username: string
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  bloodGroup: string
  company: { department: string; name: string; title: string; address: {} }
  crypto: { coin: string; wallet: string; network: string }
  ein: string
  eyeColor: string
  hair: { color: string; type: string }
  height: number
  id: number
  image: string
  ip: string
  macAddress: string
  maidenName: string
  role: string
  ssn: string
  token: string
  refreshToken: string
  university: string
  userAgent: string
  weight: number
}

interface MyCartProps {
  products: Product[]
  totalDiscount?: number
  totalPrice: number
  totalPriceWithDiscount?: number
}

interface Tokens {
  token: string
  refreshToken: string
}

interface FilterProps {
  brands: string[]
  sort: number
}

type LoaderData<T extends LoaderFunction> = Awaited<ReturnType<T>> extends
  | Response
  | infer D
  ? D
  : never

type ActionData<T extends ActionFunction> = Awaited<ReturnType<T>> extends
  | Response
  | infer D
  ? D
  : never

export type {
  ActionData,
  MyCartProps,
  LoaderData,
  Person,
  Product,
  Tokens,
  FilterProps,
}
