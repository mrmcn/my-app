import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function InputCell({ ...rest }) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{ display: 'block' }}
    >
      <TextField
        size='small'
        {...rest}
      />
    </Grid>
  )
}
