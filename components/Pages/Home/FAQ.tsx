import BorderedBottomBox from '@/components/Wrapper/BorderedBottomBox'
import { styled } from '@mui/material/styles'
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, Stack, TextField, Typography, createSvgIcon } from '@mui/material'
import React, { useState } from 'react'

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}))

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
  '&.Mui-expanded': {
    padding: theme.spacing(0, 3)
  }
}))

type Props = {}

const FAQ = (props: Props) => {
  const [expanded, setExpanded] = useState()

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <BorderedBottomBox>
      <Container maxWidth='md' sx={{ py: 6 }}>
        <Typography
          variant='h3'
          component='h3'
          color='common.white'
          align='center'
          sx={{
            mb: 6
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1} mb={6}>
          <CustomAccordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <CustomAccordionSummary
              expandIcon={<PlusIcon color='secondary' />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5'>What is Netflix?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant='h5' sx={{ mb: 4 }}>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              </Typography>
              <Typography variant='h5'>
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <CustomAccordionSummary
              expandIcon={<PlusIcon color='secondary' />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant='h5'>What is Netflix?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant='h5' sx={{ mb: 4 }}>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              </Typography>
              <Typography variant='h5'>
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Stack>
        <Typography variant='h6' color='common.white' component='p' textAlign='center' sx={{ my: 3 }}>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Grid container justifyContent='center'>
          <Grid item xs={8} md={7} xl={6}>
            <TextField variant='filled' label='Email address' fullWidth sx={{ bgcolor: 'common.white' }} />
          </Grid>
          <Grid item xs='auto'>
            <Button variant='contained' size='large' color='primary' sx={{ height: '100%', borderRadius: '2px', backgroundColor: 'primary' }}>Get Started</Button>
          </Grid>
        </Grid>
      </Container>
    </BorderedBottomBox>
  )
}

export default FAQ