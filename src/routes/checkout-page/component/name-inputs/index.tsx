import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Person } from '../../../../services/interface'

export function NameInputs({ data }: { data: Person }) {
  return (
    <>
      <Divider>Change recipient name</Divider>
      <Grid
        container
        spacing={3}
        sx={{ mt: 1 }}
      >
        <Grid item>
          <TextField
            type='text'
            label='First name'
            size='small'
            name='firstName'
            defaultValue={data.firstName}
            required
            inputProps={{ minLength: 3 }}
          />
        </Grid>
        <Grid item>
          <TextField
            type='text'
            label='Last name'
            size='small'
            name='lastName'
            defaultValue={data.lastName}
            required
            inputProps={{ minLength: 3 }}
          />
        </Grid>
      </Grid>
      <Button
        type='submit'
        name='userId'
        value={data.id}
      >
        Edit
      </Button>
    </>
  )
}
