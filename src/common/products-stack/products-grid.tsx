import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Product } from '../../services/interface'
import Fallback from './fallback'
import Item from './item'

export default function Products({ sx }: ProductProps) {
  const { response } = useLoaderData() as LoaderProps
  const itemList = (res: { categoryProducts: Product[] }) =>
    res.categoryProducts.map((product) => (
      <Item
        key={product.id}
        product={product}
      />
    ))
  const fallbackList = Array.from(new Array(8)).map(() => (
    <Fallback key={nanoid()} />
  ))

  return (
    <Box sx={sx}>
      <Grid
        component='article'
        container
        spacing={{ xs: 1, md: 2 }}
      >
        <Suspense fallback={fallbackList}>
          <Await resolve={response}>{itemList}</Await>
        </Suspense>
      </Grid>
    </Box>
  )
}

interface ProductProps {
  sx: { [k: string]: any }
}

interface LoaderProps {
  response: Promise<{ categoryProducts: Product[] }>
}
