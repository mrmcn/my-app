import * as JSURL from 'jsurl'
import { FilterProps, Product } from '../services/interface'

const products = {
  characteristicList: [
    { id: 0, name: 'characteristic 1', value: 'value' },
    { id: 1, name: 'characteristic 2', value: 'value' },
    { id: 2, name: 'characteristic 3', value: 'value' },
    { id: 3, name: 'characteristic 4', value: 'value' },
    { id: 4, name: 'characteristic 5', value: 'value' },
    { id: 5, name: 'characteristic 6', value: 'value' },
    { id: 6, name: 'characteristic 7', value: 'value' },
  ],
  banners: [
    {
      id: 0,
      height: '300',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm8ggYFKxhu7VzOcT1-p7qymXhRvB7hHMzw&usqp=CAU',
      alt: 'duff beer',
      content: "It's Always Time For Duff!",
      route: '',
      bp: { xs: 12 },
    },
    {
      id: 1,
      height: '170',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRja2PDqyQctVeu2DNOIcGCZOGugGx6pvnf7w&usqp=CAU',
      alt: 'merry christmas',
      content: 'Merry Christmas, Meine Dammen und Herren!',
      route: '',
      bp: { xs: 12, sm: 6 },
    },
    {
      id: 2,
      height: '170',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZB-o26Kikh5XzpH5yjLeGPp3NhEuFV0J5WQ&usqp=CAU',
      alt: 'winter collection',
      content:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      route: '',
      bp: { xs: 12, sm: 6 },
    },
  ],
}

const fakeFilter = (params: URLSearchParams, data: Product[]) => {
  const { filters } = Object.fromEntries(params)
  const allFilters: FilterProps = JSURL.parse(filters)
  const getBrands = new Set(data.map(({ brand }) => brand))
  const allBrands = Array.from(getBrands)

  if (!allFilters) {
    return {
      categoryProducts: data,
      allBrands,
    }
  }

  const toSort = () => {
    const sort = allFilters.sort
    if (sort === 1) {
      return ab
    } else if (sort === 2) {
      return ba
    } else if (sort === 3) {
      return maxMin
    } else {
      return minMax
    }
  }

  if (allFilters.brands?.length > 0) {
    return {
      categoryProducts: data
        .filter((product) => allFilters.brands.includes(product.brand))
        .toSorted(toSort()),
      allBrands,
    }
  }

  return {
    categoryProducts: data.toSorted(toSort()),
    allBrands,
  }
}

const extractData = (formData: any) => {
  const arr: string[][] = Array.from(formData.entries())
  const data: ExtractDataProps = arr
    .map((vas) => {
      const keyName = vas[0].split('.')
      if (keyName.length === 1) {
        return vas
      } else {
        return [keyName[0], { [keyName[1]]: vas[1] }]
      }
    })
    .reduce((acc: any, curr: any) => {
      if (acc[curr[0]] === undefined) {
        return { ...acc, [curr[0]]: curr[1] }
      } else {
        return { ...acc, [curr[0]]: { ...acc[curr[0]], ...curr[1] } }
      }
    }, {})
  return data
}

export { fakeFilter, products, extractData }

const ab = (a: Product, b: Product) => {
  let x = a.title.toLowerCase()
  let y = b.title.toLowerCase()
  if (x < y) {
    return -1
  }
  if (x > y) {
    return 1
  }
  return 0
}

const ba = (a: Product, b: Product) => {
  let y = a.title.toLowerCase()
  let x = b.title.toLowerCase()
  if (x < y) {
    return -1
  }
  if (x > y) {
    return 1
  }
  return 0
}
const minMax = (a: Product, b: Product) => a.price - b.price
const maxMin = (a: Product, b: Product) => b.price - a.price

interface ExtractDataProps {
  [x: string]: string | { [x: string]: { [x: string]: string } }
}
