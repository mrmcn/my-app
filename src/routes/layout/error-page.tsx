import AccountCircle from '@mui/icons-material/AccountCircle'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import CategoryIcon from '@mui/icons-material/Category'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ErrorElement from '../../common/error-element'

export default function ErrorPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar component='nav'>
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <IconButton
              aria-label='top menu'
              color='inherit'
              size='large'
            >
              <MenuIcon fontSize='inherit' />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              color='inherit'
              size='large'
              aria-label='home page'
              href='/'
            >
              <AutoAwesomeMosaicIcon fontSize='inherit' />
              <Typography
                component='span'
                variant='h5'
              >
                STORY
              </Typography>
            </IconButton>
            <IconButton
              color='inherit'
              size='large'
              aria-label='categories menu'
            >
              <CategoryIcon fontSize='inherit' />
              <Typography
                component='span'
                variant='h5'
              >
                CATALOG
              </Typography>
            </IconButton>
          </Box>
          <IconButton
            aria-label='cart'
            color='inherit'
            size='large'
          >
            <ShoppingCartIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            aria-label='cabinet'
            color='inherit'
            size='large'
          >
            <AccountCircle fontSize='inherit' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='main'>
        <ErrorElement />
      </Box>
    </Box>
  )
}
