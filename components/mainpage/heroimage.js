/**@jsx jsx */
import { jsx, Box, Flex, Grid, Text, Button } from 'theme-ui'
export default () => (
  <Box
    as='section'
    sx={{
      width: '100%',
      // position: 'relative',
      top: '70px',
      color: 'white',
      pt: 'calc(70px + 32px)', //4
      pb: [3, 4],
      backgroundImage:
        'url(landingpge/trianglepattern.svg),linear-gradient(120.29deg, rgba(235, 35, 63, 0.86), rgba(183, 3, 28, 0.86)),url(landingpage/patternalt.svg)',
      backgroundSize: `500px,cover,200px`,
      backgroundRepeat: 'no-repeat,repeat,repeat',
      backgroundPosition: 'left bottom',
    }}>
    <Flex
      sx={{
        justifyContent: 'center',
        backgroundImage: 'url(landingpage/underline.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: ['300px', '400px', '450px'],
        backgroundPosition: 'bottom center',
        alignItems: 'center',
        pb: 2,
      }}>
      <h1
        sx={{
          my: 0,
          fontSize: [5, 6, 'calc(8px * 9)'],
          display: 'inline-block',
        }}>
        Hack Box -
      </h1>
      <img
        src='landingpage/computer.png'
        sx={{ height: [60, 75], width: [60, 75] }}></img>
    </Flex>
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
      }}>
      <img
        src='landingpage/raspberrypi.png'
        sx={{
          height: [250, 350],
          justifySelf: 'center',
          transform: 'rotate(90deg)',
          my: 0,
        }}
      />
      <Text
        sx={{
          mt: 0,
          fontSize: [2, 3, 'calc(8px * 4  )'],
          fontWeight: 'initial',
          lineHeight: '110%',
          position: 'relative',
          bottom: 30,
          mx: [1],
        }}>
        A project to provide internet resources to the most remote parts of the
        world
        <span sx={{ display: ['none', 'initial'] }}>
          {' '}
          , because we think internet is everyone’s right!
        </span>
      </Text>
    </Box>
  </Box>
)
