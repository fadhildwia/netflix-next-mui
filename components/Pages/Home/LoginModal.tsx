import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, Modal, Checkbox, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import Image from 'next/legacy/image';
import React, { useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'common.black',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean,
  onClose: () => void
}

const LoginModal = (props: Props) => {
  const { open, onClose } = props

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography variant='h4' component='h1' sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                sx={{ backgroundColor: 'common.white' }}
                id='email'
                name='email'
                type='email'
                label='Email'
                variant='filled'
              />
              <FormHelperText sx={{ color: grey[700] }}>Please enter a valid email.</FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                sx={{ backgroundColor: 'common.white' }}
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                label='password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputAdornment>
                  )
                }}
                variant='filled'
              />
              <FormHelperText sx={{ color: grey[700] }}>Your password must contain between 4 and 60 characters.</FormHelperText>
            </FormControl>
            <Button type='submit' variant='contained' fullWidth size='large'>Sign in</Button>
          </form>
        </Grid>
        <Grid container alignItems='center' justifyContent='space-between' sx={{ mb: 1 }}>
          <Box>
            <Checkbox sx={{ color: grey[700] }} />
            <Typography variant="caption" color={grey[700]}>
              Remember me
            </Typography>
          </Box>
          <Typography variant="caption" component='a' href='#' color={grey[700]}>
            Need help?
          </Typography>
        </Grid>
        <Grid container alignItems='center' sx={{ mb: 2 }}>
          <Image
            src='/_images/facebook.png'
            height={20}
            width={20}
            layout='fixed'
            alt='Facebook login'
          />
          <Typography variant="caption" component='a' href='#' color={grey[700]} sx={{ ml: 1 }}>
            Login with facebook?
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" component='a' href='#' color={grey[700]}>
            New to Netflix?
          </Typography>
          <Typography variant="body1" color='secondary' component='a' href='#'>
            &nbsp;Sign up now.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption" color={grey[700]}>
            This page is protected by Google reCAPTCHA to ensure you{'`'}re not a bot.
          </Typography>
          <Typography variant="caption" component='a' href='#' color={grey[700]}>
            &nbsp;Learn more.
          </Typography>
        </Grid>
      </Box>
    </Modal>
  )
}

export default LoginModal