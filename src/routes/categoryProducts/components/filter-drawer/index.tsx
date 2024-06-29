import Drawer from '@mui/material/Drawer'
import Paper from '@mui/material/Paper'
import useMediaQuery from '@mui/material/useMediaQuery'
import useModalContext from '../../../../context/modal'
import { Theme } from '@mui/material'

const drawerWidth = 240

export default function FilterDrawer({ children }: { children: JSX.Element }) {
  return (
    <Paper
      component='aside'
      elevation={10}
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label='mailbox folders'
    >
      <MyDrawer>{children}</MyDrawer>
    </Paper>
  )
}

function MyDrawer({ children }: { children: JSX.Element }) {
  const context = useModalContext()
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'))

  return (
    <Drawer
      variant={matches ? 'permanent' : 'temporary'}
      open={matches ? true : context?.filtersOpen}
      onTransitionEnd={() => {
        if (!matches) {
          return () => context?.setIsClosingFilters(false)
        }
        return null
      }}
      onClose={() => {
        if (!matches) {
          return () => {
            context?.setIsClosingFilters(true)
            context?.setFiltersOpen(false)
          }
        }
        return null
      }}
      ModalProps={
        !matches
          ? {
              keepMounted: true,
            }
          : {}
      }
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          position: 'static',
        },
      }}
    >
      {children}
    </Drawer>
  )
}
