import '../styles/globals.css'

import '@hackclub/theme/fonts/reg-bold.css'
import Meta from '../meta/index'
import theme from '../theme/index'
import Head from 'next/head'
import { ThemeProvider, merge } from 'theme-ui'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta as={Head} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
