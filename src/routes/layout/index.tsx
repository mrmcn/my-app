import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'
import useModalContext from '../../context/modal'
import BreadCrumbs from './components/bread-crumbs'
import Cart from './components/cart'
import CategoriesMenu from './components/categories-menu'
import NavBar from './components/navbar'
import ResponsiveStack from './components/responsive-stack'
import Search from './components/search'

export default function Layout() {
  const data = useModalContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar component='nav'>
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <IconButton
              aria-label='top menu'
              color='inherit'
              size='large'
              onClick={() => data?.setOpenNavBar(true)}
            >
              <MenuIcon fontSize='inherit' />
            </IconButton>
          </Box>
          <ResponsiveStack />
          <Search />
          <Cart />
          <IconButton
            aria-label='cabinet'
            color='inherit'
            size='large'
            href='/cabinet'
          >
            <AccountCircle fontSize='inherit' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BreadCrumbs />
      <Box component='main'>
        <Outlet />
      </Box>
      <NavBar />
      <CategoriesMenu />
    </Box>
  )
}
