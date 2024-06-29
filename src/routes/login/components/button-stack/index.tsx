import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

export default function ButtonStack() {
  const navigate = useNavigate()

  return (
    <Stack sx={{ m: 3 }}>
      <Button
        variant='outlined'
        color='secondary'
        fullWidth
        href='/logUp'
        sx={{ mb: 3 }}
      >
        <Typography>Create an account</Typography>
      </Button>
      <Button
        variant='outlined'
        onClick={() => {
          navigate(-1)
        }}
        fullWidth
        sx={{ mb: 3 }}
      >
        <Typography>Cancel</Typography>
      </Button>
    </Stack>
  )
}
