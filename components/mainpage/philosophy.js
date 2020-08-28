/**@jsx jsx*/

import { jsx, Box, Text, Grid, Flex } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'

export default () => (
  <Box as='section' sx={{ variant: 'sectionbox', color: 'instagram' }}>
    <Fade left clear>
      <h1 sx={{ my: 0 }}>Philosphy</h1>
    </Fade>

    <Fade bottom clear>
      <Text sx={{ color: 'text', mr: [0, 5] }}>
        <span
          sx={{
            background:
              'linear-gradient(-100deg,rgba(236,55,80,0.33),rgba(236,55,80,0.7),rgba(236,55,80,0.1))',
          }}>
          {' '}
          More than 40% of the world's population has no or very limited access
          to the internet{' '}
        </span>
        and are deprived from the resources available on internet which we take
        for granted. This problem needs to be solved!
      </Text>
    </Fade>
    <Grid columns={[1, 1, 2]} gap={[4]} sx={{ pt: [3, 4] }}>
      <Fade bottom clear>
        <Wrapper
          sx={{
            ':after': {
              bottom: ['-3rem', '-2rem', '-4rem'],
              right: ['-1rem'],
              width: ['6rem', '8rem'],
              height: ['8rem', '10rem'],
            },
          }}>
          <Flex
            sx={{
              bg: 'red',
              height: '350px',
              borderRadius: ['8px', '10px'],
              flexDirection: 'column',
              color: 'white',
            }}>
            <Box sx={{ mx: [4] }}>
              <h2
                sx={{
                  fontSize: [5],
                  textAlign: 'center',
                  pb: [2, 3],
                  backgroundImage: 'url(landingpage/underline.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom center',
                  backgroundSize: '300px',
                  mb: [3, 4],
                }}>
                EQUALITY
              </h2>
              <Text sx={{ fontSize: [2, 3] }}>
                We are blessed with internet and are regularly upskilling
                ourselves but their are still millions who lag access to this
                wonderful resources. We are trying to bridge this gap.
              </Text>
            </Box>
          </Flex>
        </Wrapper>
      </Fade>
      <Fade bottom clear>
        <Flex
          sx={{
            height: '350px',
            backgroundImage: 'url(landingpage/education.jpg)',
            backgroundSize: 'cover',
            borderRadius: ['8px', '10px'],
            backgroundPosition: 'center',

            color: 'white',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              ml: [3, 4],
              transform: ['translate(0,40px)', 'translate(0,60px)'],
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
            <Text sx={{ fontSize: [2, 3], fontWeight: 'regular' }}>
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

const Wrapper = styled.div`
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: -4rem;
    right: -1rem;
    background-image: url(landingpage/buddha.svg);
    width: 8rem;
    height: 10rem;
  }
`
