import ContactPageIcon from '@mui/icons-material/ContactPage'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ListAltIcon from '@mui/icons-material/ListAlt'
import LogoutIcon from '@mui/icons-material/Logout'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'

export const items: ItemsProps = [
  {
    id: 0,
    label: 'Order list',
    icon: <ListAltIcon />,
    route: '/cabinet',
  },
  {
    id: 1,
    label: 'Wish list',
    icon: <FavoriteIcon />,
    route: '/cabinet/wish-list',
  },
  {
    id: 2,
    label: 'My bonus account',
    icon: <MonetizationOnIcon />,
    route: '/cabinet/bonus-account',
  },
  {
    id: 3,
    label: 'Correspondence',
    icon: <QuestionAnswerIcon />,
    route: '/cabinet/correspondence',
  },
  {
    id: 4,
    label: 'Personal data',
    icon: <ContactPageIcon />,
    route: '/cabinet/personal-data',
  },
  { id: 5, label: 'Logout', icon: <LogoutIcon /> },
]

type ItemsProps = {
  id: number
  label: string
  icon: JSX.Element
  route?: string
}[]
