import FilterListIcon from '@mui/icons-material/FilterList'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import * as JSURL from 'jsurl'
import { Form, useSearchParams } from 'react-router-dom'
import Products from '../../common/products-stack/products-grid'
import useModalContext from '../../context/modal'
import BrandsFilter from './components/brands-filter'
import FilterDrawer from './components/filter-drawer'
import SortSelect from './components/sort'

export default function CategoryProducts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramValue = searchParams.get('filters')
  const filters = JSURL.parse(paramValue)

  function handleChange(e) {
    const formData = new FormData(e.currentTarget)
    const newFilters = {
      brands: formData.getAll('brands'),
    }
    const allFilters = { ...filters, ...newFilters }
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('filters', JSURL.stringify(allFilters))
    setSearchParams(newSearchParams)
  }

  return (
    <Box sx={{ m: 1 }}>
      <Box
        component='section'
        sx={{ display: 'flex' }}
      >
        <FiltersButton />
        <SortSelect
          filters={filters}
          setSearchParams={setSearchParams}
        />
      </Box>
      <Box sx={{ display: 'flex', mt: 1 }}>
        <FilterDrawer>
          <Box
            component={Form}
            method='get'
            onChange={handleChange}
          >
            <BrandsFilter filters={filters} />
          </Box>
        </FilterDrawer>
        <Products sx={{ ml: { md: 2 }, flexGrow: 1 }} />
      </Box>
    </Box>
  )
}

function FiltersButton() {
  const context = useModalContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={() => {
          if (!context.isClosingFilters) {
            context.setFiltersOpen(!context.filtersOpen)
          }
        }}
        sx={{ display: { md: 'none' } }}
      >
        <FilterListIcon />
      </IconButton>
    </Box>
  )
}
