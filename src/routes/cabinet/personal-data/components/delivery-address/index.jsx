import Grid from '@mui/material/Grid'
import { useAsyncValue } from 'react-router-dom'
import ButtonStack from '../../common/button-stack'
import DataCell from '../../common/data-cell'
import MyAccordion from '../../common/my-accordion'

export default function DeliveryAddress({ isEdited, setIsEdited }) {
  const { id, address } = useAsyncValue()

  return (
    <MyAccordion label='Delivery address'>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
        >
          <Grid
            container
            rowSpacing={3}
          >
            <DataCell
              label='Address'
              data={address.address}
              type='text'
              name='address.address'
              isEdited={isEdited}
            />
            <DataCell
              label='City'
              data={address.city}
              type='text'
              name='address.city'
              isEdited={isEdited}
            />
            <DataCell
              label='State'
              data={address.state}
              type='text'
              name='address.state'
              isEdited={isEdited}
            />
            <DataCell
              label='PostalCode'
              data={address.postalCode}
              type='number'
              name='address.postalCode'
              isEdited={isEdited}
            />
          </Grid>
        </Grid>
        <ButtonStack
          name='userId'
          value={id}
          isEdited={isEdited}
          setIsEdited={setIsEdited}
        />
      </Grid>
    </MyAccordion>
  )
}
