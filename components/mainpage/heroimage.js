/**@jsx jsx */
import { jsx, Box, Flex, Grid, Text, Button } from 'theme-ui'
export default () => (
  <Box
    as='section'
    sx={{
      width: '100%',
      position: 'absolute',
      top: '70px',
      color: 'white',
      backgroundImage:
        'url(landingpage/trianglepattern.svg),linear-gradient(120.29deg, rgba(235, 35, 63, 0.86), rgba(183, 3, 28, 0.86)),url(landingpage/patternalt.svg)',
      backgroundSize: `500px,cover,200px`,
      backgroundRepeat: 'no-repeat,repeat,repeat',
      backgroundPosition: 'left bottom',
    }}>
    <Box sx={{ width: '100%', color: 'white', pt: 4, pb: 5 }}>
      <Flex
        sx={{
          justifyContent: 'center',
          backgroundImage: 'url(landingpage/underline.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '450px',
          backgroundPosition: 'bottom center',
          alignItems: 'center',
          pb: 2,
          mb: [5],
        }}>
        <h1
          sx={{
            my: 0,
            fontSize: [6, 'calc(8px * 9)'],
            display: 'inline-block',
          }}>
          Hack Box -
        </h1>
        <img
          src='landingpage/computer.png'
          sx={{ height: 75, width: 75 }}></img>
      </Flex>
      <Grid columns={[2]} sx={{ mx: ['80px', 'calc(8px * 28)'], py: [4] }}>
        <img
          src='landingpage/raspberrypi.png'
          sx={{
            height: [100, 350],
            justifySelf: 'end',
            mr: ['calc(8px * 8)'],
          }}></img>
        <Box sx={{ alignSelf: 'center' }}>
          <Text
            sx={{
              fontSize: ['calc(8px * 4  )'],
              fontWeight: 'initial',
              lineHeight: '110%',
            }}>
            A project to provide internet resources to the most remote parts of
            the world, because we think internet is everyone’s right!
          </Text>
          <Box sx={{ textAlign: 'center', pt: [2] }}>
            <br />
            <Button
              sx={{
                width: '180px',
                py: [3],
                borderRadius: [10],
                color: 'black',
                bg: 'white',

                ':hover': {
                  bg: 'red',
                  color: 'white',
                  border: '2px solid white',
                },
                fontSize: [1],
              }}>
              CHECK GITHUB
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  </Box>
)
