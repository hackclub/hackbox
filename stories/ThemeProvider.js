import { ThemeProvider } from 'theme-ui'
import theme from '../theme/index'

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
