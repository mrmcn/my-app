import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Person } from '../../../../services/interface'

export function AddressInputs({ data }: { data: Person }) {
  return (
    <>
      <Divider>Change phone & delivery address</Divider>
      <Grid
        container
        spacing={3}
        sx={{ mt: 1 }}
      >
        <Grid item>
          <TextField
            type='text'
            label='Address'
            size='small'
            name='address.address'
            required
            defaultValue={data.address.address}
          />
        </Grid>
        <Grid item>
          <TextField
            type='text'
            label='City'
            size='small'
            name='address.city'
            required
            defaultValue={data.address.city}
          />
        </Grid>
        <Grid item>
          <TextField
            type='number'
            label='Postal code'
            size='small'
            name='address.postalCode'
            required
            defaultValue={data.address.postalCode}
          />
        </Grid>
        <Grid item>
          <TextField
            type='text'
            label='State'
            size='small'
            name='address.state'
            required
            defaultValue={data.address.state}
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
