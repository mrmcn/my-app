import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Skeleton from '@mui/material/Skeleton'

export default function ImagesListBack() {
  return (
    <ImageList
      sx={{ mt: 0, height: 400 }}
      cols={1}
      gap={0}
      rowHeight={300}
    >
      <ImageListItem>
        <Skeleton
          variant='rectangular'
          height={300}
        />
      </ImageListItem>
    </ImageList>
  )
}
