import ListItemButton from '@mui/material/ListItemButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import useModalContext from '../../../../context/modal'
import { LoaderData } from '../../../../services/interface'
import { layoutLoader } from '../../loader'
import Fallback from './fallback'

export default function CategoriesMenu() {
  const context = useModalContext()
  const { categories } = useLoaderData() as LoaderData<typeof layoutLoader>
  const itemList = (res: string[]) =>
    res.map((category) => (
      <Item
        key={category}
        category={category}
        handleClick={() => context!.setOpenCategoriesMenu(false)}
      />
    ))

  return (
    <Menu
      anchorReference='anchorPosition'
      anchorPosition={{ top: 78, left: 0 }}
      open={context!.openCategoriesMenu}
      onClose={() => context!.setOpenCategoriesMenu(false)}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuList
        variant='menu'
        aria-label='categories menu'
      >
        <Suspense fallback={<Fallback />}>
          <Await resolve={categories}>{itemList}</Await>
        </Suspense>
      </MenuList>
    </Menu>
  )
}

function Item({ category, handleClick }: ItemProps) {
  return (
    <MenuItem onClick={handleClick}>
      <ListItemButton
        dense
        href={`/categories/${category}`}
      >
        {category}
      </ListItemButton>
    </MenuItem>
  )
}

interface ItemProps {
  category: string
  handleClick: () => void
}
