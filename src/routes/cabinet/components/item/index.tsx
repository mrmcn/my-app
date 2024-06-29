import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { PathMatch, useFetcher } from 'react-router-dom'

export default function Item({
  label,
  route,
  icon,
  open,
  routeMatch,
}: ItemProps) {
  const fetcher = useFetcher()
  const isLoggingOut = fetcher.formData != null
  const currentButton = route === routeMatch?.pattern?.path

  return (
    <Box
      component={fetcher.Form}
      method='post'
      action='/logout'
    >
      <ListItem
        disablePadding
        sx={{
          display: 'block',
          backgroundColor: currentButton ? 'aquamarine' : 'inherit',
        }}
      >
        {label === 'Logout' ? (
          <Button
            aria-label={label}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            href={route}
            type='submit'
            disabled={isLoggingOut}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </Button>
        ) : (
          <ListItemButton
            component='a'
            aria-label={label}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            href={route}
            disabled={isLoggingOut}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        )}
      </ListItem>
    </Box>
  )
}

interface ItemProps {
  label: string
  icon: JSX.Element
  route?: string | undefined
  open: boolean
  routeMatch: PathMatch<string> | null
}
