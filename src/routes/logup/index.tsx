import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { Form, useActionData } from 'react-router-dom'
import { ActionData } from '../../services/interface'
import { logUpAction } from './action'
import ButtonStack from './components/button-stack'
import InputCell from './components/input-cell'
import LogUpDialog from './components/modal'

export default function LogUpPage() {
  const data = useActionData() as ActionData<typeof logUpAction>
  if (data?.id) return <LogUpDialog />

  return (
    <Box
      component={Form}
      method='post'
      sx={{ m: 10 }}
    >
      <Grid
        container
        spacing={3}
      >
        <InputCell
          label='First name'
          type='text'
          name='firstName'
          required
          inputProps={{ minLength: 3 }}
        />
        <InputCell
          label='Last name'
          type='text'
          name='lastName'
          inputProps={{ minLength: 3 }}
        />
        <InputCell
          label='Birthday'
          defaultValue='2000-01-01'
          type='date'
          name='birthDate'
        />
        <InputCell
          label='Gender'
          defaultValue='male'
          type='text'
          name='gender'
          select
        >
          <MenuItem value='male'>male</MenuItem>
          <MenuItem value='female'>female</MenuItem>
        </InputCell>
        <InputCell
          label='Phone'
          type='tel'
          name='phone'
          inputProps={{ min: 10 }}
        />
        <InputCell
          label='Email'
          type='email'
          name='email'
        />
        <InputCell
          label='Address'
          type='text'
          name='address.address'
        />
        <InputCell
          label='City'
          type='text'
          name='address.city'
        />
        <InputCell
          label='State'
          type='text'
          name='address.state'
        />
        <InputCell
          label='PostalCode'
          type='number'
          name='address.postalCode'
        />
        <InputCell
          label='Login'
          type='text'
          name='username'
          inputProps={{ minLength: 3 }}
        />
        <InputCell
          label='Password'
          type='text'
          name='password'
          inputProps={{ min: 6 }}
        />
        <ButtonStack />
      </Grid>
    </Box>
  )
}
