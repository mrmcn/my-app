import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cabinet from './routes/cabinet'
import BonusAccount from './routes/cabinet/bonusAccount'
import Correspondence from './routes/cabinet/correspondence'
import { cabinetLoader } from './routes/cabinet/loader'
import OrderList from './routes/cabinet/orderList'
import { orderListLoader } from './routes/cabinet/orderList/loader'
import PersonalData from './routes/cabinet/personal-data'
import { personalDataAction } from './routes/cabinet/personal-data/action'
import { personalDataLoader } from './routes/cabinet/personal-data/loader'
import WishList from './routes/cabinet/wishList'
import CategoryProducts from './routes/categoryProducts'
import { categoryAction } from './routes/categoryProducts/action'
import { categoriesLoader } from './routes/categoryProducts/loader'
import CheckoutPage from './routes/checkout-page'
import { checkoutPageAction } from './routes/checkout-page/action'
import { checkoutPageLoader } from './routes/checkout-page/loader'
import HomePage from './routes/homePage'
import { homePageLoader } from './routes/homePage/loader'
import Layout from './routes/layout'
import { layoutAction } from './routes/layout/action'
import ErrorPage from './routes/layout/error-page'
import { layoutLoader } from './routes/layout/loader'
import { LoginPage } from './routes/login'
import { loginAction } from './routes/login/action'
import { loginLoader } from './routes/login/loader'
import { logoutAction } from './routes/logout/action'
import LogUpPage from './routes/logup'
import { logUpAction } from './routes/logup/action'
import Product from './routes/product'
import AllAbout from './routes/product/all-about'
import { allAboutAction } from './routes/product/all-about/action'
import { allAboutLoader } from './routes/product/all-about/loader'
import Characteristics from './routes/product/characteristics'
import { characteristicsAction } from './routes/product/characteristics/action'
import { characteristicLoader } from './routes/product/characteristics/loader'
import { productLoader } from './routes/product/loader'
import Photo from './routes/product/photo'
import { photoAction } from './routes/product/photo/action'
import { PhotoLoader } from './routes/product/photo/loader'
import Reviews from './routes/product/reviews'
import RootBoundary from './routes/root-boundary'
import SearchResults from './routes/search-results'
import { searchResultsAction } from './routes/search-results/action'
import { searchResultsLoader } from './routes/search-results/loader'
import { Product as ProductProps } from './services/interface'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    loader: layoutLoader,
    action: layoutAction,
    errorElement: <ErrorPage />,
    id: 'layout',
    children: [
      {
        errorElement: <RootBoundary />,
        handle: { crumb: false },
        children: [
          {
            element: <HomePage />,
            loader: homePageLoader,
            handle: { crumb: false },
            index: true,
          },
          {
            element: <CategoryProducts />,
            path: 'categories/:category',
            loader: categoriesLoader,
            action: categoryAction,
          },
          {
            element: <SearchResults />,
            path: 'search',
            loader: searchResultsLoader,
            action: searchResultsAction,
          },
          {
            element: <Product />,
            path: 'product/:productId',
            loader: productLoader,
            handle: {
              crumb: ([{ title }]: [ProductProps]) => title,
            },
            children: [
              {
                element: <AllAbout />,
                index: true,
                loader: allAboutLoader,
                action: allAboutAction,
                handle: { crumb: false },
              },
              {
                element: <Characteristics />,
                path: 'characteristics',
                loader: characteristicLoader,
                action: characteristicsAction,
              },
              { element: <Reviews />, path: 'reviews' },
              {
                element: <Photo />,
                path: 'photo',
                loader: PhotoLoader,
                action: photoAction,
              },
            ],
          },
          {
            element: <Cabinet />,
            path: 'cabinet',
            loader: cabinetLoader,
            children: [
              {
                element: <OrderList />,
                index: true,
                loader: orderListLoader,
                handle: { crumb: false },
              },
              {
                element: <PersonalData />,
                path: 'personal-data',
                loader: personalDataLoader,
                action: personalDataAction,
              },
              {
                element: <BonusAccount />,
                path: 'bonus-account',
              },
              {
                element: <Correspondence />,
                path: 'correspondence',
              },
              {
                element: <WishList />,
                path: 'wish-list',
              },
            ],
          },
          {
            element: <CheckoutPage />,
            path: 'checkout-page',
            loader: checkoutPageLoader,
            action: checkoutPageAction,
          },
          {
            element: <LoginPage />,
            path: 'login',
            loader: loginLoader,
            action: loginAction,
          },
          { element: <LogUpPage />, path: 'logUp', action: logUpAction },
        ],
      },
    ],
  },
  { path: '/logout', action: logoutAction },
])

export default function Router() {
  return <RouterProvider router={router} />
}
