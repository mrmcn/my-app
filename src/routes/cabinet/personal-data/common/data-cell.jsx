import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function DataCell({ data, label, isEdited, validate, ...rest }) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
    >
      {isEdited && (
        <TextField
          label={label}
          defaultValue={data}
          size='small'
          inputProps={validate}
          {...rest}
        />
      )}
      {!isEdited && (
        <>
          <Typography variant='caption'>{label}</Typography>
          <Typography variant='subtitle1'>{data}</Typography>
        </>
      )}
    </Grid>
  )
}
