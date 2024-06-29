import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function LogUpDialog() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='logUp-dialog-title'
        aria-describedby='logUp-dialog-description'
      >
        <DialogTitle id='logUp-dialog-title'>
          Account created successfully
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='logUp-dialog-description'>
            You can view and edit your data in the "Cabinet" section
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            href='/'
          >
            <Typography>Home page</Typography>
          </Button>
          <Button
            onClick={() => setOpen(false)}
            href='/login'
            autoFocus
          >
            <Typography>Login</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
