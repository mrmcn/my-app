import PaymentIcon from '@mui/icons-material/Payment'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

export const infoList = [
  {
    name: 'Payment',
    icon: <PaymentIcon />,
    description:
      'Payment upon receipt of goods, Payment by card at the branch, Online card, Google Pay, Non-cash for legal entities.',
  },
  {
    name: 'Delivery',
    icon: <LocalShippingIcon />,
    description: 'Pickup from postal operators offices.',
  },
  {
    name: 'Guarantee',
    icon: <WorkspacePremiumIcon />,
    description:
      '12 months official warranty from the manufacturer Exchange/return goods within 14 days.',
  },
]
