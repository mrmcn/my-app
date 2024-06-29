import MenuItem from '@mui/material/MenuItem'
import Skeleton from '@mui/material/Skeleton'
import { nanoid } from 'nanoid'

export default function Fallback() {
  const list = Array.from(new Array(20)).map(() => (
    <MenuItem key={nanoid()}>
      <Skeleton
        variant='text'
        height={15}
        width={90}
      />
    </MenuItem>
  ))
  return <>{list}</>
}
