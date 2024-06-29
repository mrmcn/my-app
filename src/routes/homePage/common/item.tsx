import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default function Item({ category, primary }: ItemProps) {
  return (
    <ListItem
      disablePadding={true}
      dense
    >
      <ListItemButton
        dense
        href={`/categories/${category}`}
      >
        <ListItemText
          inset
          primary={primary}
        />
      </ListItemButton>
    </ListItem>
  )
}

interface ItemProps {
  category?: string
  primary: JSX.Element | string
}
