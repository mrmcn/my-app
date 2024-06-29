import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import CategoryIcon from '@mui/icons-material/Category'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useModalContext from '../../../../context/modal'

export default function ResponsiveStack() {
  const context = useModalContext()

  return (
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
        aria-controls={context!.openCategoriesMenu ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={context!.openCategoriesMenu ? 'true' : undefined}
        onClick={() => context!.setOpenCategoriesMenu(true)}
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
  )
}
