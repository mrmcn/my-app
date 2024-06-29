import ExpandMore from '@mui/icons-material/ExpandMore'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'
import { nanoid } from 'nanoid'
import { infoList } from '../../../../../data/product/info-card-list'

export default function InfoBack() {
  return (
    <Card
      component='article'
      raised
    >
      <CardHeader
        title={
          <Skeleton
            variant='text'
            width={100}
          />
        }
        subheader={
          <Skeleton
            variant='text'
            width={40}
          />
        }
      />
      <CardContent sx={{ display: 'flex' }}>
        <Rating
          name='read-only'
          value={null}
          size='small'
          readOnly
          sx={{ flexGrow: 1 }}
        />
        <Typography variant='body2'>
          <Skeleton
            variant='text'
            width={80}
          />
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex' }}>
        <CardContent>
          <Typography variant='subtitle2'>
            <Skeleton
              variant='text'
              width={40}
            />
          </Typography>
          <Typography component='span'>
            <Skeleton
              variant='text'
              width={105}
              height={42}
            />
          </Typography>
          <Typography
            variant='body2'
            aria-label='stock'
          >
            <Skeleton
              variant='text'
              width={40}
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            color='success'
            startIcon={<ShoppingCartIcon />}
          >
            Buy
          </Button>
        </CardActions>
      </Box>
      <CardContent>
        <List aria-labelledby='nested-list-subheader'>
          {infoList.map(({ icon, name }) => (
            <Paper
              key={nanoid()}
              variant='outlined'
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
                <ExpandMore />
              </ListItemButton>
            </Paper>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
