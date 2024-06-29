import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Suspense, useState } from 'react'
import { Await, useFetcher, useLoaderData } from 'react-router-dom'
import { ErrorElement } from '../error-element'
import Contacts from './components/contacts'
import DeleteUser from './components/delete-user'
import DeliveryAddress from './components/delivery-address'
import IdentificationData from './components/identification-data'
import LoginPassword from './components/login-password'
import FallBack from './fallback'

export default function PersonalData() {
  const { data } = useLoaderData()
  const fetcher = useFetcher()
  const [isEdited, setIsEdited] = useState(false)

  return (
    <Paper
      elevation={10}
      sx={{ flexGrow: 1, ml: 1 }}
    >
      <Suspense fallback={<FallBack />}>
        <Await
          resolve={data}
          errorElement={<ErrorElement />}
        >
          <Box
            component={fetcher.Form}
            method='put'
          >
            <IdentificationData
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
            <Contacts
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
            <DeliveryAddress
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
            <LoginPassword
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
          </Box>
          <DeleteUser />
        </Await>
      </Suspense>
    </Paper>
  )
}
