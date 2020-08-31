/**@jsx jsx*/
import { jsx, Box, Text, Grid } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'

export default () => (
  <Box
    as='section'
    sx={{
      backgroundImage: 'url(landingpage/patchleft.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left -400px top -20px',
      backgroundSize: '800px',
    }}>
    <Box sx={{ variant: 'sectionbox' }}>
      <Fade left clear>
        <h1 sx={{ mt: 0, color: 'green' }}>How it works?</h1>
      </Fade>

      <Fade bottom clear>
        <Text sx={{ color: 'text', mr: [0, 5] }}>
          <span
            sx={{
              background:
                'linear-gradient(-100deg,rgba(51,214,166,0.33),rgba(51,214,166,0.95),rgba(243,234,164,0.1))',
            }}>
            Hack Box sends SD cards containing a Raspberry Pi system image
          </span>
          &nbsp; to people and this SD card contains all the digital resources
          and software to work offline! People just need to plug the SD card and
          can start enjoying these resources.
        </Text>
      </Fade>
      <Fade left clear>
        <Grid columns={[1, 1, 1, 3]} gap={[5, 5, 5, 3, 4]} sx={{ pt: [3, 4] }}>
          <CustomBox
            sx={{
              bg: 'steel',
              height: ['400px'],
              borderRadius: [8, 10],
              position: 'relative',
              ':after': {
                bottom: ['-4rem', '-4rem', '-4rem', '-5rem'],
                right: ['1.4rem', '1.5rem', '1rem', '-1rem'],
                width: ['6rem', '6rem', '6rem', '8rem'],
                height: ['9rem', '9rem', '9rem', '10rem'],
                backgroundSize: ['60px', '70px'],
                backgroundPosition: 'center',
              },
            }}>
            <h2
              sx={{
                textAlign: 'center',
                color: 'white',
                fontSize: ['54px'],
                backgroundImage: 'url(landingpage/underline.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center',
                backgroundSize: '220px',
                pb: [2],
                //    mb: [4],
              }}>
              SHIP
            </h2>
            <Text sx={{ color: 'white', textAlign: 'center', mx: [1] }}>
              We ship people the Hack Box SD card ,It contains all the resources
              and Hack Box software &nbsp;
              <span
                sx={{
                  color: 'orange',
                  fontWeight: 'bold',
                }}>
                Hack Store.
              </span>
            </Text>
          </CustomBox>
          <CustomBox
            sx={{
              bg: 'steel',
              height: ['400px'],
              borderRadius: [8, 10],
              position: 'relative',
              ':after': {
                width: ['5rem', '6rem', '6rem', '8rem'],
                height: ['5rem', '6rem', '6rem', '8rem'],
                right: ['1.4rem', '1rem', '1rem', '0rem'],
                bottom: ['-2rem', '-2rem', '-2rem', '-3rem'],
                backgroundImage: 'url(landingpage/install.png)',
                backgroundSize: ['75px', '90px'],
                backgroundPosition: ['center'],
                transform: [
                  'rotate(10deg)',
                  'rotate(10deg)',
                  'rotate(10deg)',
                  'rotate(10deg)',
                ],
              },
            }}>
            <h2
              sx={{
                textAlign: 'center',
                color: 'white',
                fontSize: ['54px'],
                backgroundImage: 'url(landingpage/underline.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center',
                backgroundSize: '220px',
                pb: [2],
              }}>
              INSTALL
            </h2>
            <Text sx={{ color: 'white', textAlign: 'center', mx: [1] }}>
              Just plug the SD card in the PI and done! Hack Store is now
              available{' '}
              <span sx={{ fontWeight: 'bold', color: 'yellow' }}>
                over LAN{' '}
              </span>
              ( i.e WiFi ) to everyone!
            </Text>
          </CustomBox>
          <CustomBox
            sx={{
              bg: 'steel',
              height: ['400px'],
              borderRadius: [8, 10],
              position: 'relative',
              ':after': {
                width: '6rem',
                height: '8rem',
                backgroundImage: 'url(landingpage/sdcardalt.png)',
                backgroundPosition: 'center',
                backgroundSize: ['75px', '90px'],
                right: ['1.4rem', '1rem', '1rem', '0rem'],
                bottom: ['-3rem'],
                transform: 'rotate(10deg)',
              },
            }}>
            <h2
              sx={{
                textAlign: 'center',
                color: 'white',
                fontSize: ['54px'],
                backgroundImage: 'url(landingpage/underline.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom center',
                backgroundSize: '220px',
                pb: [2],
              }}>
              UPDATE
            </h2>
            <Text sx={{ color: 'white', textAlign: 'center', mx: [1] }}>
              Update it over a period of time by downloading a new system image
              in small chunks via a{' '}
              <span sx={{ fontWeight: 'bold', color: 'green' }}>
                download manager.
              </span>
            </Text>
          </CustomBox>
        </Grid>
      </Fade>
    </Box>
  </Box>
)

const CustomBox = styled.div`
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: -8rem;
    right: -2rem;
    transform: rotate(30deg);
    background-image: url(landingpage/rocketalt.png);
    width: 12rem;
    height: 14rem;
  }
`
