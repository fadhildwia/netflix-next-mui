import { Box, Container, Grid, MenuItem, Select, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: grey[700] }}>
      <Container maxWidth='md' sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography>Questions? Call 007-803-321-2130</Typography>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>FAQ</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Media Center</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Redeem Gift Cards</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Terms of Use</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Corporate Information</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Legal Notices</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Help Center</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Investor Relations</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Buy Gift Cards</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Privacy</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Contact Us</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Only on Netflix</Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Account</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Jobs</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Ways to Watch</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Cookie Preferences</Typography>
                  <Typography variant='caption' component='a' href='' color={grey[700]}>Speed Test</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Box>
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
          </Box>
          <Typography variant='caption'>Netflix Indonesia</Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer