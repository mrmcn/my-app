import DeleteIcon from '@mui/icons-material/Delete'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Product } from '../../../../../../services/interface'

export default function Item({ item, fetcher }: ItemProps) {
  return (
    <>
      <ListItem>
        <Grid
          container
          sx={{ alignItems: 'center', minWidth: { sm: '50px', md: '550px' } }}
        >
          <Grid
            item
            xs={2}
            sm={1}
          >
            <ListItemAvatar>
              <Avatar
                alt=''
                src={item.thumbnail}
                variant='rounded'
                sx={{ width: 40, height: 40 }}
              />
            </ListItemAvatar>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
          >
            <ListItemText primary={<Typography>{item.title}</Typography>} />
          </Grid>
          <Grid
            item
            sm={5}
          >
            <Grid container>
              <Grid
                item
                xs={8}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Box
                  component={fetcher.Form}
                  method='PUT'
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Input
                    type='hidden'
                    name='itemId'
                    value={item.id}
                  />
                  <Button
                    type='submit'
                    name='quantity'
                    value='minus'
                    size='small'
                    disabled={item.quantity < 2}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    type='submit'
                    name='quantity'
                    value='plus'
                    size='small'
                  >
                    +
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Typography>{item.discountedPrice * item.quantity}</Typography>
              </Grid>
              <Grid
                item
                xs={2}
              >
                <Box
                  component={fetcher.Form}
                  method='DELETE'
                >
                  <IconButton
                    type='submit'
                    name='itemId'
                    value={item.id}
                    edge='end'
                    aria-label='delete'
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  )
}

interface ItemProps {
  item: Product
  fetcher: any
}
