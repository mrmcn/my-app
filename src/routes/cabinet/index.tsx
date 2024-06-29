import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { items } from '../../data/cabinet/navBarItems'
import useRouteMatch from '../../hooks/route-match'
import Item from './components/item'

const drawerWidth = 240
const routes = items.map(({ route }) => route)

export default function Cabinet() {
  const [open, setOpen] = useState(false)
  const routeMatch = useRouteMatch(routes)
  const itemList = items.map(({ id, ...rest }) => (
    <Item
      key={id}
      open={open}
      routeMatch={routeMatch}
      {...rest}
    />
  ))

  return (
    <Box sx={{ display: 'flex', m: 1 }}>
      <Paper
        elevation={10}
        component='nav'
      >
        <Drawer
          variant='permanent'
          open={open}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mr: 1,
            }}
          >
            <IconButton
              aria-label={open ? 'close drawer' : 'open drawer'}
              onClick={() => setOpen(open ? false : true)}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>
          <Divider />
          <List aria-label='my cabinet menu'>{itemList}</List>
          <Divider />
        </Drawer>
      </Paper>
      <Box
        component='article'
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

const openedMixin = (theme: Theme): CSSObject => ({
  position: 'static',
  overflowX: 'hidden',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
})

const closedMixin = (theme: Theme): CSSObject => ({
  position: 'static',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))
