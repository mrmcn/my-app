import AccountCircle from '@mui/icons-material/AccountCircle'
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn'
import CategoryIcon from '@mui/icons-material/Category'
import EuroIcon from '@mui/icons-material/Euro'
import HandshakeIcon from '@mui/icons-material/Handshake'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PaymentIcon from '@mui/icons-material/Payment'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

export const itemsSections = [
  [
    {
      id: 13,
      label: 'Home page',
      icon: <HomeIcon />,
      route: '/',
    },
    {
      id: 12,
      label: 'Catalog',
      icon: <CategoryIcon />,
    },
    {
      id: 11,
      label: 'Cart',
      icon: <ShoppingCartIcon />,
    },
    {
      id: 8,
      label: 'My cabinet',
      icon: <AccountCircle />,
      route: '/cabinet',
    },
  ],
  [
    {
      id: 0,
      label: 'Shipping and payment',
      icon: <PaymentIcon />,
    },
    { id: 1, label: 'Credit', icon: <EuroIcon /> },
    { id: 2, label: 'Guarantee', icon: <WorkspacePremiumIcon /> },
    {
      id: 3,
      label: 'Purchase returns',
      icon: <AssignmentReturnIcon />,
    },
  ],
  [
    {
      id: 4,
      label: 'Help Center',
      icon: <HelpCenterIcon />,
    },
    {
      id: 5,
      label: 'Chat',
      icon: <WhatsAppIcon />,
    },
  ],
  [
    { id: 6, label: 'About Us', icon: <InfoIcon /> },
    { id: 7, label: 'For partners', icon: <HandshakeIcon /> },
  ],
]
