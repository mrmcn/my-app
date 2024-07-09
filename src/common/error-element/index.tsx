import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Link from '@mui/material/Link'

export default function ErrorElement() {
  const error = useRouteError() as ErrorProps
  console.log('element', error)

  function errorMessage(error: ErrorProps) {
    if (isRouteErrorResponse(error)) {
      return `${error.status}, ${error.statusText} ${error.data}`
    } else if (error !== undefined) {
      return error.message
    } else if (typeof error === 'string') {
      return error
    } else {
      console.error(error)
      return 'Unknown error'
    }
  }

  return (
    <Box id='error-page'>
      <Typography variant='h1'>Oops!</Typography>
      <Typography paragraph>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography paragraph>
        <Typography component='i'>{errorMessage(error)}</Typography>
      </Typography>
      <Link href='/'>Go Home page</Link>
    </Box>
  )
}

interface ErrorProps {
  status: number
  code: string
  message: string
}
