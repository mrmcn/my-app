import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import ListBack from './fallback'

export default function ProductCharacteristic() {
  const data = useLoaderData() as {
    characteristicList: Promise<ItemProps[]>
  }
  const itemList = (res: ItemProps[]) =>
    res.map((item) => (
      <Item
        key={nanoid()}
        item={item}
      />
    ))

  return (
    <List>
      <Grid
        container
        rowSpacing={2}
      >
        <Suspense fallback={<ListBack />}>
          <Await resolve={data.characteristicList}>{itemList}</Await>
        </Suspense>
      </Grid>
    </List>
  )
}

function Item({ item }: { item: ItemProps }) {
  return (
    <ListItem>
      <Grid
        item
        xs={10}
      >
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid
        item
        xs={2}
      >
        <Typography>{item.value}</Typography>
      </Grid>
    </ListItem>
  )
}

interface ItemProps {
  id: number
  name: string
  value: string
}
