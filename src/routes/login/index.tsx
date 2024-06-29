import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Input from '@mui/material/Input'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Form, useLocation, useNavigation } from 'react-router-dom'
import ButtonStack from './components/button-stack'

export function LoginPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/'

  const navigation = useNavigation()
  const isLoggingIn = navigation.formData?.get('username') != null

  return (
    <Container
      maxWidth='xs'
      sx={{ mt: 10 }}
    >
      <Paper elevation={16}>
        <Box sx={{ pt: 3 }}>
          <Typography align='center'>Login</Typography>
        </Box>
        <Box
          component={Form}
          method='post'
          replace
        >
          <Input
            type='hidden'
            name='redirectTo'
            value={from}
          />
          <Stack
            spacing={3}
            sx={{ m: 3, mt: 0 }}
          >
            <Item
              type='text'
              label='User name:'
              name='username'
              validate={{ minLength: 3 }}
            />
            <Item
              type='password'
              label='Password:'
              name='password'
              validate={{ min: 6 }}
            />
            <Button
              type='submit'
              disabled={isLoggingIn}
            >
              <Typography>Login</Typography>
            </Button>
          </Stack>
          <ButtonStack />
        </Box>
      </Paper>
    </Container>
  )
}

function Item({ validate, ...rest }: ItemProps) {
  return (
    <>
      <TextField
        fullWidth
        required
        inputProps={validate}
        {...rest}
      />
    </>
  )
}

interface ItemProps {
  validate: { [x: string]: any }
  [x: string]: any
}
