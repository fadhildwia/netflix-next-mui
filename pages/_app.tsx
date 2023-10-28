import '@/styles/globals.css'
import theme from '@/utils/theme'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix-NEXT-MUI-CLONE</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
