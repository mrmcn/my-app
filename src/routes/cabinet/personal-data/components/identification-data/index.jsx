import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { useAsyncValue } from 'react-router-dom'
import ButtonStack from '../../common/button-stack'
import DataCell from '../../common/data-cell'
import MyAccordion from '../../common/my-accordion'

export default function IdentificationData({ isEdited, setIsEdited }) {
  const { id, firstName, lastName, birthDate, gender } = useAsyncValue()

  return (
    <MyAccordion label='Personal data'>
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
              label='First name'
              data={firstName}
              type='text'
              name='firstName'
              isEdited={isEdited}
              validate={{ minLength: 3 }}
            />
            <DataCell
              label='Last name'
              data={lastName}
              type='text'
              name='lastName'
              isEdited={isEdited}
              validate={{ minLength: 3 }}
            />
            <DataCell
              label='Birthday'
              data={birthDate}
              type='date'
              name='birthDate'
              isEdited={isEdited}
              InputLabelProps={{ shrink: true }}
            />
            <DataCell
              label='Gender'
              data={gender}
              type='text'
              name='gender'
              select
              isEdited={isEdited}
            >
              <MenuItem value='male'>male</MenuItem>
              <MenuItem value='female'>female</MenuItem>
            </DataCell>
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
