/**@jsx jsx*/

import { jsx, Box, Text, Grid, Flex } from 'theme-ui'
import Fade from 'react-reveal/Fade'
export default () => (
  <Box as='section' sx={{ variant: 'sectionbox', color: 'instagram' }}>
    <Fade left clear>
      <h1 sx={{ mb: 0 }}>Philosphy</h1>
    </Fade>

    <Fade bottom clear>
      <Text sx={{ color: 'text', fontSize: [3] }}>
        More than 40% of the world's population has no or very limited access to
        the internet and are deprived from the resources available on internet
        which we take for granted. This problem needs to be solved!
      </Text>
    </Fade>
    <Grid columns={[1, 1, 2]} gap={[4]} sx={{ pt: [3, 4] }}>
      <Fade clear>
        <Flex
          sx={{
            bg: 'red',
            height: '350px',
            borderRadius: '10px',
            flexDirection: 'column',
            color: 'white',
          }}>
          <Box sx={{ mx: [4] }}>
            <h2 sx={{ fontSize: [5], mb: [3] }}>SomeHeading</h2>
            <Text sx={{ fontSize: [3] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </Text>
          </Box>
        </Flex>
      </Fade>
      <Fade clear>
        <Flex
          sx={{
            //width: '600px',
            height: '350px',
            backgroundImage: 'url(landingpage/education.jpg)',
            backgroundSize: 'cover',
            borderRadius: '10px',
            backgroundPosition: 'center',

            color: 'white',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              ml: [3],
              transform: 'translate(0,60px)',
              textShadow: '1px 1px 5px black',
            }}>
            <h2
              sx={{
                my: 0,
                fontSize: [5],
                color: 'yellow',
                //     ml: [3],
              }}>
              #EDUCATION
            </h2>
            <Text sx={{ fontSize: [2], fontWeight: 'regular' }}>
              More than 40% of the world's population has no or very limited
              access to the internet and are deprived from the resources
              available on internet which we take for granted.
            </Text>
          </Box>
        </Flex>
      </Fade>
    </Grid>
  </Box>
)
