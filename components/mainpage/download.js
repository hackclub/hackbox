/**@jsx jsx*/
import { jsx, Box, Text, Button } from 'theme-ui'
import Fade from 'react-reveal/Fade'

export default () => (
  <Box as='section' variant={'sectionbox'}>
    <Fade clear left>
      <h1 sx={{ mt: 0, color: 'blue' }}>We are in Beta!</h1>
    </Fade>
    <Fade clear bottom>
      <Text>
        We are currently in the Beta Phase of the software,
        <span
          sx={{
            background:
              'linear-gradient(-100deg,rgba(51,142,218,0.33),rgba(51,142,218,0.95),rgba(51,142,218,0.1))',
          }}>
          &nbsp; due to the Covid-19 situation we are not testing it at scale.
        </span>
        &nbsp; We welcome feedback on the project and you can reach us via slack
        or email. To know more about how to contact us go to our
        <span sx={{ color: 'blue', fontWeight: 'bold' }}>
          {' '}
          <a
            href='https://github.com/hackclub/hackstore#user-content-who-should-i-contact-for-help'
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
            }}
            onClick={() =>
              window.open(
                'https://github.com/hackclub/hackstore#user-content-who-should-i-contact-for-help',
                '_blank'
              )
            }>
            CONTACT
          </Button>
        </Fade>
      </div>
    </Fade>
  </Box>
)
