import Grid from '@mui/material/Grid'
import Checkout from './component/checkout'
import CurrentOrder from './component/current-order'

export default function CheckoutPage() {
  return (
    <Grid
      container
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={6}
      >
        <Checkout />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
      >
        <CurrentOrder />
      </Grid>
    </Grid>
  )
}
