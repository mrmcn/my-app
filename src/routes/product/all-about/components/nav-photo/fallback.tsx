import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Skeleton from '@mui/material/Skeleton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { nanoid } from 'nanoid'

export default function PhotoBack() {
  const list = Array.from(new Array(5)).map(() => (
    <Tab
      key={nanoid()}
      icon={
        <Skeleton
          variant='rectangular'
          width={100}
          height={100}
        />
      }
    />
  ))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card>
        <Skeleton
          variant='rectangular'
          sx={{
            height: { xs: 190, sm: 400 },
          }}
        />
      </Card>
      <Tabs
        variant='scrollable'
        scrollButtons='auto'
        value={0}
      >
        {list}
      </Tabs>
    </Box>
  )
}
