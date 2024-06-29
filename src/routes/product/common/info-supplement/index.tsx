import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { Suspense } from 'react'
import {
  Await,
  useAsyncValue,
  useFetcher,
  useLoaderData,
} from 'react-router-dom'
import { fetcherKey } from '../../../../services/const'
import { Product } from '../../../../services/interface'
import SupplementBack from './fallback'

export default function InfoSupplement() {
  const data = useLoaderData() as { product: Promise<Product> }
  const fetcher = useFetcher({ key: fetcherKey.addToCart })

  return (
    <Suspense fallback={<SupplementBack />}>
      <Await resolve={data.product}>
        {(product: Product) => (
          <Card
            component='article'
            raised
            sx={{ opacity: product.stock === 0 ? 0.5 : 1 }}
          >
            <Box sx={{ display: 'flex', m: 2 }}>
              <Box>
                <CardMedia
                  component='img'
                  alt='product'
                  height='40'
                  sx={{ objectFit: 'contain' }}
                  image={product.images[0]}
                />
              </Box>
              <CardHeader
                title={<Typography noWrap>{product.title}</Typography>}
                sx={{ flexGrow: 1 }}
              />
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', mb: 2 }}>
                <Rating
                  name='read-only'
                  value={product.rating}
                  precision={0.1}
                  size='small'
                  readOnly
                  sx={{ flexGrow: 1 }}
                />
                <Typography variant='body2'>
                  Code: 40003587{product.id}
                </Typography>
              </Box>
              <PriceStack />
            </CardContent>
            <CardActions disableSpacing>
              <Box
                component={fetcher.Form}
                method='post'
                sx={{ width: '100%' }}
              >
                <Button
                  value={JSON.stringify(product)}
                  name='buyProduct'
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='success'
                  startIcon={<ShoppingCartIcon />}
                  disabled={product.stock === 0}
                >
                  Buy
                </Button>
              </Box>
            </CardActions>
          </Card>
        )}
      </Await>
    </Suspense>
  )
}

function PriceStack() {
  const product = useAsyncValue() as Product
  const visibility = product.discountPercentage > 0 ? 'visible' : 'hidden'
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
    <>
      <Typography
        variant='subtitle2'
        aria-label={`old price, discount ${product.discountPercentage}%`}
        sx={{
          textDecoration: 'line-through',
          visibility: { visibility },
        }}
      >
        {product.price}
      </Typography>
      <Typography
        component='span'
        aria-label='price'
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
    </>
  )
}
