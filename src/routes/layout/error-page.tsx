import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  function errorMessage(error: any): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
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
    </Box>
  )
}
