import Skeleton from '@mui/material/Skeleton'
import { nanoid } from 'nanoid'
import Item from '../../common/item'

export default function Fallback() {
  const list = Array.from(new Array(20)).map(() => (
    <Item
      key={nanoid()}
      primary={
        <Skeleton
          variant='text'
          height={15}
          width={90}
        />
      }
    />
  ))
  return <>{list}</>
}
