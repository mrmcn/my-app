import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useAsyncValue } from 'react-router-dom'
import { Product } from '../../../../../services/interface'

export default function NavPhotoPanel() {
  const [value, setValue] = useState(0)
  const { images } = useAsyncValue() as Product
  const topImage = images.map(
    (image, i) =>
      value === i && (
        <ImageItem
          key={nanoid()}
          image={image}
          i={i}
          value={value}
        />
      ),
  )
  const tabImageList = images.map((image, i) => (
    <Tab
      key={nanoid()}
      id={`simple-tab-${i}`}
      aria-controls={`simple-tabpanel-${i}`}
      icon={
        <img
          alt=''
          src={image}
          width='100'
        />
      }
    />
  ))

  return (
    <Box component='article'>
      {topImage}
      <Tabs
        component='nav'
        variant='scrollable'
        scrollButtons='auto'
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        aria-label='nav photo product'
      >
        {tabImageList}
      </Tabs>
    </Box>
  )
}

function ImageItem({
  i,
  image,
  value,
}: {
  i: number
  image: string
  value: number
}) {
  return (
    <Card
      raised
      sx={{
        role: 'tabpanel',
        visibility: value !== i ? 'hidden' : 'visible',
        id: `simple-tabpanel-${i}`,
        ariaLabelledby: `simple-tab-${i}`,
      }}
    >
      <CardMedia
        image={image}
        title='product photo'
        component='img'
        height='400'
        sx={{
          objectFit: 'contain',
          height: { xs: 200, sm: 400 },
        }}
      />
    </Card>
  )
}
