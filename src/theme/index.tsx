import { createTheme } from '@mui/material'
import { LinkProps } from '@mui/material/Link'
import { forwardRef } from 'react'
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom'

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  return (
    <Link
      ref={ref}
      to={href}
      {...other}
    />
  )
})

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
})
