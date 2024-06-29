import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Product } from '../../services/interface'
import PricesAndButton from '../prices-button'

export default function Item({ product }: { product: Product }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card
        raised
        aria-label={`product ${product.title} card`}
        sx={{ height: '100%', opacity: product.stock === 0 ? 0.5 : 1 }}
      >
        <CardActionArea href={`/product/${product.id}`}>
          <CardContent>
            <Typography
              variant='h5'
              align='center'
              aria-label='product name'
              noWrap
            >
              {product.title}
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            height='140'
            image={product.thumbnail}
            alt={`photo ${product.title}`}
            sx={{ objectFit: 'contain' }}
          />
        </CardActionArea>
        <PricesAndButton
          buttonSize={'small'}
          priceVariant={'h6'}
          product={product}
        />
      </Card>
    </Grid>
  )
}
