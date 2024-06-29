import SearchIcon from '@mui/icons-material/Search'
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Form, useFetcher } from 'react-router-dom'
import { LoaderData } from '../../../../services/interface'
import { layoutLoader } from '../../loader'

export default function Search() {
  const [open, setOpen] = useState(false)
  const fetcher = useFetcher<LoaderData<typeof layoutLoader>>()

  return (
    <Box
      component={Form}
      action='/search'
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <Autocomplete
        open={open}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option: any, value: any) =>
          option.title === value.title
        }
        getOptionLabel={(option) => option.title}
        options={fetcher.data?.searchProduct ?? []}
        filterOptions={(x) => x}
        value={null}
        onInputChange={(e, newInputValue) => {
          const searchParams = new URLSearchParams()
          newInputValue !== '' &&
            newInputValue !== ' ' &&
            searchParams.append('search', newInputValue)
          fetcher.submit(searchParams)
          newInputValue !== '' && setOpen(true)
        }}
        renderInput={(params) => renderInput(params, fetcher.state !== 'idle')}
      />
    </Box>
  )
}

function renderInput(
  params: AutocompleteRenderInputParams,
  isLoading: boolean,
) {
  return (
    <TextField
      {...params}
      fullWidth
      name='search'
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <InputAdornment position='end'>
            {isLoading ? (
              <CircularProgress
                color='inherit'
                size='1rem'
                aria-busy={isLoading}
              />
            ) : (
              <IconButton
                type='submit'
                aria-label='searching'
                edge='end'
              >
                <SearchIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  )
}
