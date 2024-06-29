import { matchPath, useLocation } from 'react-router-dom'

export default function useRouteMatch(patterns: (string | undefined)[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = pattern ? matchPath(pattern, pathname) : null
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}
