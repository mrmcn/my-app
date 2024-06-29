import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useAsyncValue, useFetcher } from 'react-router-dom'
import MyAccordion from '../../common/my-accordion'

export default function DeleteUser() {
  const [open, setOpen] = useState(false)
  const { id } = useAsyncValue()
  const fetcher = useFetcher()

  return (
    <MyAccordion label='Delete account'>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          color='warning'
          variant='contained'
          onClick={() => setOpen(true)}
        >
          <Typography>Delete account</Typography>
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='delete-dialog-title'
        aria-describedby='delete-dialog-description'
      >
        <DialogTitle id='delete-dialog-title'>
          Account deletion confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='delete-dialog-description'>
            This action is irreversible. This will result in complete data
            deletion. Are you sure you want to delete this account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            variant='contained'
          >
            <Typography>Do not delete</Typography>
          </Button>
          <Box
            component={fetcher.Form}
            method='DELETE'
          >
            <Button
              type='submit'
              color='warning'
              name='userId'
              value={id}
              onClick={() => setOpen(false)}
            >
              <Typography>Delete account</Typography>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </MyAccordion>
  )
}
