/**@jsx jsx*/
import { jsx, Box } from 'theme-ui'
import Fade from 'react-reveal/Fade'

export default () => (
  <Box as='section' sx={{ variant: 'sectionbox' }}>
    <Fade left clear>
      <h1 sx={{ color: 'orange' }}>What is Hack Box?</h1>
    </Fade>
  </Box>
)
