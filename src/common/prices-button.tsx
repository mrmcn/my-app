import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { TypographyVariant } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useFetcher } from 'react-router-dom'
import { fetcherKey } from '../services/const'
import { Product } from '../services/interface'

export default function PricesAndButton({
  product,
  buttonSize,
  priceVariant,
}: Props) {
  const fetcher = useFetcher({ key: fetcherKey.addToCart })
  const newPrice = Math.round(
    product.price * ((100 - product.discountPercentage) / 100),
  )
  const warehouse =
    product.stock > 5
      ? 'In stock'
      : product.stock > 0
      ? 'Is running out'
      : 'Out of stock'

  return (
    <Box sx={{ display: 'flex' }}>
      <CardContent>
        <Typography
          variant='subtitle2'
          aria-label={`price, discount ${product.discountPercentage}%`}
          sx={{
            textDecoration:
              product.discountPercentage > 0 ? 'line-through' : null,
          }}
        >
          {product.price}
        </Typography>
        <Typography
          component='span'
          aria-label='price'
          variant={priceVariant}
          sx={{
            visibility: product.stock === 0 ? 'hidden' : 'visible',
            color: product.stock !== 0 ? 'red' : null,
          }}
        >
          $ {newPrice}
        </Typography>
        <Typography
          variant='body2'
          aria-label='stock'
        >
          {warehouse}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box
          component={fetcher.Form}
          method='post'
        >
          <Button
            value={JSON.stringify(product)}
            name='buyProduct'
            type='submit'
            variant='contained'
            color='success'
            size={buttonSize}
            startIcon={<ShoppingCartIcon />}
            disabled={product.stock === 0}
          >
            Buy
          </Button>
        </Box>
      </CardActions>
    </Box>
  )
}

interface Props {
  product: Product
  buttonSize?: 'small' | 'medium' | 'large'
  priceVariant?: TypographyVariant
}
