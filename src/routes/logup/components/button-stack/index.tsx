import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function ButtonStack() {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={4}
      >
        <Button
          type='submit'
          variant='outlined'
        >
          <Typography>Create</Typography>
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
      >
        <Button
          variant='outlined'
          href='/login'
        >
          <Typography>Cancel</Typography>
        </Button>
      </Grid>
    </>
  )
}
