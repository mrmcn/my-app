import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

export default function Fallback() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card raised>
        <CardContent>
          <Typography>
            <Skeleton
              variant='text'
              sx={{ fontSize: '1.5rem' }}
            />
          </Typography>
        </CardContent>
        <Skeleton
          variant='rectangular'
          height={140}
        />
        <Box sx={{ display: 'flex' }}>
          <CardContent>
            <Typography variant='subtitle2'>
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
              />
            </Typography>
            <Typography>
              <Skeleton
                variant='text'
                width={60}
                sx={{ fontSize: '1rem' }}
              />
            </Typography>
            <Typography variant='body2'>
              <Skeleton
                variant='text'
                sx={{ fontSize: '1rem' }}
              />
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant='contained'
              color='success'
              size='small'
              startIcon={<ShoppingCartIcon />}
            >
              Buy
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  )
}
