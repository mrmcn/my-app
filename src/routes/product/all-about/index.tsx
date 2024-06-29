import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Product } from '../../../services/interface'
import Description from './components/description'
import InfoCards from './components/info-card'
import NavPhotoPanel from './components/nav-photo'
import Fallback from './fallback'

export default function AllAbout() {
  const data = useLoaderData() as { product: Promise<Product> }

  return (
    <Box sx={{ mt: 1 }}>
      <Grid
        container
        spacing={7}
      >
        <Suspense fallback={<Fallback />}>
          <Await resolve={data.product}>
            <Grid
              item
              xs={12}
              sm={7}
              md={6}
            >
              <NavPhotoPanel />
              <Description />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              md={6}
            >
              <InfoCards />
            </Grid>
          </Await>
        </Suspense>
      </Grid>
    </Box>
  )
}
