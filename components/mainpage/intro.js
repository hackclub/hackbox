/**@jsx jsx*/
import { jsx, Box, Text, Grid, Flex, Button } from 'theme-ui'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'

export default () => (
  <Box
    sx={{
      backgroundImage: 'url(landingpage/patch.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right -250px top 80px',
      //backgroundSize: '800px',
    }}>
    <Box as='section' sx={{ variant: 'sectionbox' }}>
      <Fade left clear>
        <h1 sx={{ color: 'orange' }}>What is Hack Box?</h1>
      </Fade>
      <Fade>
        <Text
          sx={{
            mr: [0, 2, 5],
            fontSize: [3],
            a: {
              color: 'instagram',
              textDecorationLine: 'underline',
            },
          }}>
          Hack Box is an initiative to{' '}
          <span
            sx={{
              background:
                'linear-gradient(-100deg,rgba(243,234,164,0.33),rgba(243,234,164,0.95),rgba(243,234,164,0.1))',
            }}>
            provide digital resources (courses,programming softwares,books etc)
          </span>
          &nbsp; to the most remote part of the world.This is achieved via a
          software <a href='#'>Hack Store</a> (this link is to a dummy online
          version!) which runs completely offline.
        </Text>
      </Fade>
      <br />
      <Grid columns={[4]} sx={{}}>
        <Div
          sx={{
            bg: 'steel',
            pb: [4],
            borderRadius: 10,
            gridColumn: ['1/5', '1/5', '1/4'],
            position: 'relative',
            overflow: 'visible',
            ':after': {
              width: ['6rem', '8rem'],
              height: ['8rem', '10rem'],
            },
          }}>
          <h1
            sx={{
              textAlign: 'center',
              color: 'white',
              mb: 0,
              fontSize: [5, 'initial'],
              my: [4],
              pb: [3],
            }}>
            Hack Store
          </h1>
          <Flex
            sx={{
              fontSize: ['26px'],
              color: 'white',
              mx: [2, 3, 4, 5],
              p: {
                my: 0,
                fontSize: [3, 'intial'],
              },
            }}>
            <p>🪒</p>
            <p sx={{ my: 0, mx: [2, 4] }}>
              Hack Store is a web application that is being used to cater frees
              digital resources in the hack box program.
            </p>
          </Flex>
          <Flex
            sx={{
              fontSize: ['26px'],
              color: 'white',
              mt: [2],
              mx: [2, 3, 4, 5],
              p: {
                my: 0,
              },
            }}>
            <p>🪒</p>
            <p sx={{ my: 0, mx: [2, 4] }}>
              It uses a sd card to serve all it's files! and hence works
              offline.
            </p>
          </Flex>
          <div sx={{ textAlign: 'center' }}>
            <Button
              sx={{
                mt: [2, 4],
                color: 'text',
                bg: 'white',
                borderRadius: '10px',
                mx: 'auto',
                ':hover': {
                  bg: 'orange',
                  color: 'white',
                },
              }}>
              HACK STORE
            </Button>
          </div>
        </Div>
      </Grid>
    </Box>
  </Box>
)

const Div = styled.div`
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: -4rem;
    right: -1rem;
    background-image: url(landingpage/hackstorealt.svg);
    width: 8rem;
    height: 10rem;
  }
`
