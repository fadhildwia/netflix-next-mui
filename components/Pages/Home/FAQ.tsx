import BorderedBottomBox from '@/components/Wrapper/BorderedBottomBox'
import { styled } from '@mui/material/styles'
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, Stack, TextField, Typography, createSvgIcon } from '@mui/material'
import React, { useState } from 'react'

const data = [
  {
    title: 'What is Netflix?',
    description: [
      {
        text: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
      },
      {
        text: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There`s always something new to discover and new TV shows and movies are added every week!'
      }
    ]
  },
  {
    title: 'How much does Netflix cost?',
    description: [
      {
        text: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.'
      },
    ]
  },
  {
    title: 'Where can i watch?',
    description: [
      {
        text: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
      },
      {
        text: 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you`re on the go and without an internet connection. Take Netflix with you anywhere.'
      }
    ]
  },
  {
    title: 'How do i cancel?',
    description: [
      {
        text: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
      },
    ]
  },
  {
    title: 'What can i watch on Netflix?',
    description: [
      {
        text: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
      },
    ]
  },
  {
    title: 'Is Netflix good for kids?',
    description: [
      {
        text: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
      },
      {
        text: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don`t want kids to see.'
      }
    ]
  },
]

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
          {data.map((item, index) => (
            <CustomAccordion key={index} square expanded={expanded === index} onChange={handleChange(index)}>
              <CustomAccordionSummary
                expandIcon={<PlusIcon color='secondary' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant='h5'>{item.title}</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                {item.description.map((item2, index2) => (
                  <Typography key={index2} variant='h5' sx={{ mb: (item.description.length - 1) === index2 ? 0 : 4 }}>
                    {item2.text}
                  </Typography>
                ))}
              </AccordionDetails>
            </CustomAccordion>
          ))}
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