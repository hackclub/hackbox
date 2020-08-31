/**@jsx jsx*/
import { jsx, Box, Text, Button } from 'theme-ui'
import Fade from 'react-reveal/Fade'

export default () => (
  <Box as='section' variant={'sectionbox'}>
    <Fade clear left>
      <h1 sx={{ mt: 0, color: 'blue' }}>Download Our Beta Version!</h1>
    </Fade>
    <Fade clear bottom>
      <Text>
        We are currently in the Beta Phase of the software,
        <span
          sx={{
            background:
              'linear-gradient(-100deg,rgba(51,142,218,0.33),rgba(51,142,218,0.95),rgba(51,142,218,0.1))',
          }}>
          &nbsp; you can download the SD card images of the beta version.
        </span>
        &nbsp; We welcome feedback on the project and you can reach us via slack
        or email. To know more about how to contact us go to our
        <span sx={{ color: 'blue', fontWeight: 'bold' }}>
          {' '}
          <a
            href='https://github.com/hackclub/hackstore'
            target='blank'
            sx={{
              borderBottom: '3px solid #338eda',
            }}>
            &nbsp;Github Readme.
          </a>
        </span>
      </Text>
      <br />
      <div sx={{ textAlign: 'center' }}>
        <Fade clear>
          <Button
            sx={{
              color: 'white',
              bg: 'blue',
              borderRadius: [8, 10],
              width: [200],
              py: [3],
            }}>
            Download
          </Button>
        </Fade>
      </div>
    </Fade>
  </Box>
)
