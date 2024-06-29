import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useAsyncValue } from 'react-router-dom'
import PricesAndButton from '../../../../../common/prices-button'
import { infoList } from '../../../../../data/product/info-card-list'
import { Product } from '../../../../../services/interface'

export default function InfoCards() {
  const product = useAsyncValue() as Product
  const servicesList = infoList.map((item) => (
    <Item
      key={nanoid()}
      {...item}
    />
  ))

  return (
    <Card
      component='article'
      raised
      sx={{ opacity: product.stock === 0 ? 0.5 : 1 }}
    >
      <CardHeader
        title={product.title}
        subheader={product.brand}
      />
      <CardContent sx={{ display: 'flex' }}>
        <Rating
          name='read-only'
          value={product.rating}
          precision={0.1}
          size='small'
          readOnly
          sx={{ flexGrow: 1 }}
        />
        <Typography variant='body2'>Code: 40003587{product.id}</Typography>
      </CardContent>
      <PricesAndButton
        priceVariant={'h4'}
        product={product}
      />
      <CardContent>
        <List aria-labelledby='nested-list-subheader'>{servicesList}</List>
      </CardContent>
    </Card>
  )
}

function Item({ name, icon, description }: ItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <Paper variant='outlined'>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
      >
        <Typography
          paragraph
          sx={{ ml: 5 }}
        >
          {description}
        </Typography>
      </Collapse>
    </Paper>
  )
}

interface ItemProps {
  name: string
  icon: JSX.Element
  description: string
}
