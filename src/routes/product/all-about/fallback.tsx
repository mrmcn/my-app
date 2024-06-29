import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import DescriptionBack from './components/description/fallback'
import InfoBack from './components/info-card/fallback'
import PhotoBack from './components/nav-photo/fallback'

export default function Fallback() {
  return (
    <Box sx={{ flexGrow: 1, mt: 7, ml: 7 }}>
      <Grid
        container
        spacing={7}
      >
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
        >
          <PhotoBack />
          <DescriptionBack />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
        >
          <InfoBack />
        </Grid>
      </Grid>
    </Box>
  )
}
