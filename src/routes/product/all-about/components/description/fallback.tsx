import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function DescriptionBack() {
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
        </CardContent>
      </Card>
    </Box>
  )
}
