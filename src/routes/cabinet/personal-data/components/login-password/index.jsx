import Grid from '@mui/material/Grid'
import { useAsyncValue } from 'react-router-dom'
import ButtonStack from '../../common/button-stack'
import DataCell from '../../common/data-cell'
import MyAccordion from '../../common/my-accordion'

export default function LoginPassword({ isEdited, setIsEdited }) {
  const { id, username, password } = useAsyncValue()

  return (
    <MyAccordion label='Login & password'>
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
              label='Login'
              data={username}
              type='text'
              name='username'
              isEdited={isEdited}
              validate={{ minLength: 3 }}
            />
            <DataCell
              label='Password'
              data={password}
              type='text'
              name='password'
              isEdited={isEdited}
              validate={{ min: 6 }}
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
