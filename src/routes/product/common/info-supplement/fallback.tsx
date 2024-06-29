import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

export default function SupplementBack() {
  return (
    <Card
      component='article'
      raised
    >
      <Box sx={{ display: 'flex', m: 2 }}>
        <Box>
          <Skeleton
            variant='rounded'
            width={40}
            height={40}
          />
        </Box>
        <CardHeader
          title={
            <Typography noWrap>
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
              />
            </Typography>
          }
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Rating
            name='read-only'
            value={null}
            precision={0.1}
            size='small'
            readOnly
            sx={{ flexGrow: 1 }}
          />
          <Typography variant='body2'>Code:</Typography>
        </Box>
        <PriceStack />
      </CardContent>
      <CardActions disableSpacing>
        <Button
          fullWidth
          variant='contained'
          color='success'
          startIcon={<ShoppingCartIcon />}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  )
}

function PriceStack() {
  return (
    <>
      <Typography variant='subtitle2'>
        <Skeleton
          variant='text'
          width={40}
        />
      </Typography>
      <Typography component='span'>
        <Skeleton
          variant='text'
          width={40}
        />
      </Typography>
      <Typography variant='body2'>
        <Skeleton
          variant='text'
          width={40}
        />
      </Typography>
    </>
  )
}
