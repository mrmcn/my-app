import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

export default function CharacteristicBack() {
  return (
    <Box>
      <Typography
        variant='h4'
        sx={{ mt: 3, mb: 2 }}
      >
        <Skeleton
          variant='text'
          width={450}
        />
      </Typography>
      <Grid
        container
        spacing={8}
      >
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
        ></Grid>
      </Grid>
    </Box>
  )
}
