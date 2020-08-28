import '../styles/globals.css'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../theme/index'
import { ThemeProvider } from 'theme-ui'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
