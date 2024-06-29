import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useAsyncError } from 'react-router-dom'
import Stack from '@mui/material/Stack'

export function ErrorElement() {
  const error = useAsyncError()

  if (error.response.status !== 401) {
    throw error
  }

  return (
    <Container maxWidth='sm'>
      <Box sx={{ mt: 20 }}>
        <Alert
          variant='outlined'
          severity='warning'
        >
          To view this data you need to log in again
        </Alert>
        <Buttons />
      </Box>
    </Container>
  )
}

function Buttons() {
  return (
    <Stack
      direction='row'
      spacing={10}
      sx={{
        justifyContent: 'center',
      }}
    >
      <Button
        color='inherit'
        size='small'
        href='/login?from=%2Fcabinet'
      >
        <Typography>Login</Typography>
      </Button>
      <Button
        color='inherit'
        size='small'
        href='/'
      >
        <Typography>Out</Typography>
      </Button>
    </Stack>
  )
}
