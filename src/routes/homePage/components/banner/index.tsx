import { Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { BannerProps } from '../..'

export default function Banner({
  height,
  image,
  content,
  route,
  alt,
  bp,
}: BannerProps) {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'))

  return (
    <Grid
      item
      {...bp}
    >
      <Card
        raised
        component='article'
      >
        <CardActionArea href={route}>
          <CardMedia
            component='img'
            height={matches ? height : '135'}
            image={image}
            alt={alt}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography
              noWrap
              variant='body2'
              color='text.secondary'
            >
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
