import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

export default function OrderList() {
  const { orderList } = useLoaderData()

  return (
    <Paper
      elevation={10}
      sx={{ flexGrow: 1, ml: 1, minHeight: 350 }}
    >
      <Suspense fallback={<div></div>}>
        <Await resolve={orderList}>
          {(res) =>
            res.carts.length === 0 ? <Typography>Not orders</Typography> : null
          }
        </Await>
      </Suspense>
    </Paper>
  )
}
