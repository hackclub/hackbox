/**@jsx jsx*/

import { jsx, Box, Text } from 'theme-ui'
import Fade from 'react-reveal/Fade'
export default () => (
  <Box as='section' sx={{ variant: 'sectionbox', color: 'instagram' }}>
    <Fade left clear>
      <h1 sx={{ mb: 0 }}>Philosphy</h1>
    </Fade>

    <Fade big>
      <Text sx={{ color: 'text', fontSize: [3] }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Fade>
  </Box>
)
