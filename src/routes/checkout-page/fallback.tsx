import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

export default function FallBack() {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Receiver name:
          </Typography>
          <Skeleton
            variant='text'
            width={80}
          />
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Phone & delivery address:
          </Typography>
          <Box>
            <Skeleton
              variant='text'
              width={70}
            />
            <Skeleton
              variant='text'
              width={70}
            />
            <Skeleton
              variant='text'
              width={50}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </>
  )
}
