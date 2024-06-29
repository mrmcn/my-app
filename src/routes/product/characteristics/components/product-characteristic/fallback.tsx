import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import Skeleton from '@mui/material/Skeleton'

export default function ListBack() {
  const itemList = Array.from(new Array(5)).map(() => <Item key={nanoid()} />)

  return (
    <List>
      <Grid
        container
        rowSpacing={2}
      >
        {itemList}
      </Grid>
    </List>
  )
}

function Item() {
  return (
    <ListItem>
      <Grid
        item
        xs={10}
      >
        <Typography>
          <Skeleton
            variant='text'
            width={350}
          />
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
      >
        <Typography>
          <Skeleton
            variant='text'
            width={50}
          />
        </Typography>
      </Grid>
    </ListItem>
  )
}
