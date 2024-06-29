import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Product } from '../../../../services/interface'

export default function Item({ item }: { item: Product }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt=''
          src={item.thumbnail}
          variant='rounded'
          sx={{ width: 40, height: 40 }}
        />
      </ListItemAvatar>
      <ListItemText primary={item.title} />
      <Typography variant='body2'>{item.quantity} pcs</Typography>
      <Typography
        variant={item.discountPercentage > 0 ? 'body2' : 'body1'}
        sx={{
          ml: 1,
          textDecoration: item.discountPercentage > 0 ? 'line-through' : null,
        }}
      >
        ${item.price * item.quantity}
      </Typography>
      <Typography
        sx={{
          ml: 1,
          visibility: item.stock === 0 ? 'hidden' : 'visible',
          color: item.stock !== 0 ? 'red' : null,
        }}
      >
        ${item.discountedPrice * item.quantity}
      </Typography>
    </ListItem>
  )
}
