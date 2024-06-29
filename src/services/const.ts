export const queryKey = {
  categories: 'categories',
  products: 'categoryProducts',
  product: 'product', // params.productId
  search: 'search', // url.searchParams
  brands: 'brands', // url.searchParams, params.category
  characteristic: 'characteristicList',
  personalData: 'personalData',
  account: 'account',
  delAccount: 'delAccount',
  logUp: 'logUp', // formData
  login: 'login', // formData
  authRefresh: 'authRefresh',
  editQuantity: 'editQuantity',
  deleteProduct: 'deleteProduct',
  banners: 'banners',
  sendOrder: 'sendOrder', // formData
  getOrders: 'getOrders',
}

export const fetcherKey = {
  addToCart: 'addToCart',
}
