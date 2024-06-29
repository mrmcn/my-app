import { Link } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { Suspense } from 'react'
import { Await, UIMatch, useMatches } from 'react-router-dom'

const translations: { [a: string]: string } = {
  '': 'Home',
}

export default function BreadCrumbs() {
  const matches = useMatches() as UIMatch<string, { crumb: any }>[]
  const crumbs = matches
    .filter(({ handle }) => handle?.crumb !== false)
    .map(({ handle, data, pathname }, index, array) => {
      const segment = pathname.split('/').at(-1)
      const last = index === array.length - 1

      return (
        <Crumb
          key={nanoid()}
          to={last ? undefined : pathname}
        >
          {typeof handle?.crumb === 'function' ? (
            <Suspense fallback={<></>}>
              <Await resolve={Promise.all(Object.values(data))}>
                {handle.crumb}
              </Await>
            </Suspense>
          ) : (
            translations[segment!] ?? segment
          )}
        </Crumb>
      )
    })

  return <Breadcrumbs aria-label='breadcrumb'>{crumbs}</Breadcrumbs>
}

const Crumb = ({ to, ...rest }: CrumbProps) =>
  to ? (
    <Link
      href={to}
      underline='hover'
      color='inherit'
      {...rest}
    />
  ) : (
    <Typography {...rest} />
  )

interface CrumbProps {
  to: string | undefined
  children: string | JSX.Element
}
