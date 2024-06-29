import Grid from '@mui/material/Grid'
import { useAsyncValue } from 'react-router-dom'
import ButtonStack from '../../common/button-stack'
import DataCell from '../../common/data-cell'
import MyAccordion from '../../common/my-accordion'

export default function Contacts({ isEdited, setIsEdited }) {
  const { id, phone, email } = useAsyncValue()

  return (
    <MyAccordion label='Contacts'>
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
              label='Phone'
              data={phone}
              type='tel'
              name='phone'
              isEdited={isEdited}
              validate={{ min: 10 }}
            />
            <DataCell
              label='Email'
              data={email}
              type='email'
              name='email'
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
