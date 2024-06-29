import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Product } from '../../../services/interface'
import InfoSupplement from '../common/info-supplement'
import ProductCharacteristic from './components/product-characteristic'
import CharacteristicBack from './fallback'

export default function Characteristics() {
  const data = useLoaderData() as { product: Promise<Product> }

  return (
    <Box>
      <Suspense fallback={<CharacteristicBack />}>
        <Await resolve={data}>
          {({ product }: { product: Product }) => (
            <Typography
              variant='h4'
              sx={{ mt: 3, mb: 2 }}
            >
              {product.title}
            </Typography>
          )}
        </Await>
      </Suspense>
      <Grid
        container
        spacing={8}
      >
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
        >
          <ProductCharacteristic />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
        >
          <InfoSupplement />
        </Grid>
      </Grid>
    </Box>
  )
}
