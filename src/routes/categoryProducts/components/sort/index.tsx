import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as JSURL from 'jsurl'
import { SetURLSearchParams } from 'react-router-dom'
import { FilterProps } from '../../../../services/interface'

export default function SortSelect({
  filters,
  setSearchParams,
}: SortSelectProps) {
  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl
        fullWidth
        size='small'
      >
        <InputLabel id='sort'>Sorting</InputLabel>
        <Select
          name='sort'
          labelId='sort'
          id='select'
          value={filters?.sort || ''}
          onChange={(e) =>
            handleChange(e.target.value, setSearchParams, filters)
          }
        >
          <MenuItem value={1}>By name 'a' to 'b'</MenuItem>
          <MenuItem value={2}>By name 'b' to 'a'</MenuItem>
          <MenuItem value={3}>Price max to min</MenuItem>
          <MenuItem value={4}>Price min to max</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const handleChange = (
  value: string | number,
  setSearchParams: SetURLSearchParams,
  filters: FilterProps,
) => {
  const newFilters = { ...filters, sort: value }
  const newSearchParams = new URLSearchParams()
  newSearchParams.set('filters', JSURL.stringify(newFilters))
  setSearchParams(newSearchParams)
}

interface SortSelectProps {
  filters: FilterProps
  setSearchParams: SetURLSearchParams
}
