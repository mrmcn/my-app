import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function ButtonStack({ name, value, isEdited, setIsEdited }) {
  return (
    <Grid
      item
      xs={12}
      sm={2}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <ButtonGroup
        variant='text'
        orientation='vertical'
        aria-label='Button group'
      >
        <Button onClick={() => setIsEdited(!isEdited)}>
          <Typography>{isEdited ? 'Cancel' : 'Change'}</Typography>
        </Button>
        {isEdited && (
          <Button
            type='submit'
            name={name}
            value={value}
          >
            <Typography>Edit</Typography>
          </Button>
        )}
      </ButtonGroup>
    </Grid>
  )
}
