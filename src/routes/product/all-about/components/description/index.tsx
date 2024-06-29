import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useAsyncValue } from 'react-router-dom'
import { Product } from '../../../../../services/interface'

export default function Description() {
  const { description } = useAsyncValue() as Product

  return (
    <Box
      component='article'
      sx={{ mt: 3 }}
    >
      <Card variant='outlined'>
        <CardContent>
          <Typography
            variant='h5'
            color='text.secondary'
            gutterBottom
          >
            Description
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
