import BorderedBottomBox from '@/components/Wrapper/BorderedBottomBox'
import { AppBar, Box, Button, Container, Grid, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material'
import Image from 'next/legacy/image'
import React from 'react'

type Props = {
  openModal: () => void
}

const Header = (props: Props) => {
  const { openModal } = props

  return (
    <BorderedBottomBox>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          padding: '25px 20px',
          position: 'absolute'
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems='center' spacing={2}>
            <Grid item xs>
              <Image priority src='/_images/netflix.svg' height={45} width={167} layout='intrinsic' alt='Netflix Logo' />
            </Grid>
            <Grid item xs='auto'>
              <Select
                name='lang'
                variant='outlined'
                size='small'
                defaultValue='EN'
                sx={{
                  border: '2px',
                  borderStyle: 'solid',
                  borderColor: 'common.white',
                  color: 'common.white',
                  '& .MuiSelect-icon': {
                    color: 'common.white'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  }
                }}
              >
                <MenuItem value='EN'>English</MenuItem>
                <MenuItem value='ID'>Bahasa Indonesia</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Button color='primary' variant='contained' onClick={openModal}>Sign in</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{
        position: 'relative',
        height: '745px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%,
          )`
        }
      }}>
        <Image src='/_images/backdrop.jpg' objectFit='cover' layout='fill' alt='Backdrop Netflix' />
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1000 }}>
          <Typography variant='h2' color='common.white' component='h1' fontWeight='600' textAlign='center'>
            Unlimited moview, TV shows, and more.
          </Typography>
          <Typography variant='h5' color='common.white' component='p' textAlign='center' gutterBottom>
            Watch anywhere. Cancel anytime.
          </Typography>
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
      </Box>
    </BorderedBottomBox>
  )
}

export default Header
