import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { Link, Outlet } from 'react-router-dom'
import { PATH } from '../../data/product/path-name'
import useRouteMatch from '../../hooks/route-match'

export default function Product() {
  const routeMatch = useRouteMatch(PATH)
  const currentTab = routeMatch?.pattern?.path

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 1 }}>
        <Tabs
          component='nav'
          value={currentTab}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='nav data product'
        >
          <Tab
            label='All about'
            value={PATH[0]}
            to=''
            component={Link}
          />
          <Tab
            label='Characteristics'
            value={PATH[1]}
            to='characteristics'
            component={Link}
          />
          <Tab
            label='Reviews'
            value={PATH[2]}
            to='reviews'
            component={Link}
          />
          <Tab
            label='Photo'
            value={PATH[3]}
            to='photo'
            component={Link}
          />
        </Tabs>
        <Outlet />
      </Box>
    </>
  )
}
