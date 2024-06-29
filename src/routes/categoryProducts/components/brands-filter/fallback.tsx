import ExpandMore from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import IconButton from '@mui/material/IconButton'

export default function Fallback() {
  return (
    <Box sx={{ display: 'flex', m: 3 }}>
      <FormLabel>
        Brands{' '}
        <IconButton>
          <ExpandMore />
        </IconButton>
      </FormLabel>
    </Box>
  )
}
