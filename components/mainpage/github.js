/**@jsx jsx*/

import { jsx, Box, Text, Grid, Flex, Button } from 'theme-ui'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'

export default () => (
  <Box
    as='section'
    sx={{
      backgroundImage: [
        'url(landingpage/patchleftgithub.svg)',
        'url(landingpage/patchleftgithub.svg)',
        'url(landingpage/patchgithub.svg) , url(landingpage/patchleftgithub.svg)',
      ],

      backgroundRepeat: 'no-repeat',
      backgroundPosition: [
        'left -400px top -20px',
        'left -400px top -20px',
        'right -250px top 80px , left -420px top -120px',
      ],
      backgroundSize: ['default', 'default', 'default,800px', 'default,800px'],
    }}>
    <Box as='section' sx={{ variant: 'sectionbox' }}>
      <Fade clear left>
        {' '}
        <h1 sx={{ color: 'facebook' }}>Where is the code?</h1>
      </Fade>{' '}
      <Fade bottom clear>
        <Text sx={{ color: 'text', mr: [0, 5], pb: [2] }}>
          The code of the project is&nbsp;
          <span
            sx={{
              background:
                'linear-gradient(-100deg,rgba(243,234,164,0.33),rgba(243,234,164,0.95),rgba(243,234,164,0.1))',
            }}>
            open source and is available on Github
          </span>
          , we also have some project documentation there. We welcome
          countribution in any form to the project!
        </Text>
      </Fade>
      <img
        sx={{
          width: ['250px', '250px', '300px'],
          display: ['none', 'none', 'none', 'initial'],
          position: 'absolute',
        }}
        src='landingpage/github.png'
      />
      <CustomBox
        sx={{
          maxWidth: ['600px'],
          position: 'relative',
          borderRadius: [8, 10],
          bg: 'steel',
          gridColumn: '2/4',
          mx: 'auto',
          mt: [4],
          color: 'white',
          ':after': {
            bottom: ['-4rem'],
            right: ['-1rem'],
            backgroundImage: ['url(landingpage/github.png)'],
            width: ['8rem'],
            height: ['10rem'],
            display: ['initial', 'initial', 'initial', 'none'],
          },
        }}>
        <h2
          sx={{
            textAlign: 'center',
            fontSize: [5],
            pt: [4],
            mb: [3],
            mt: [0],
            color: 'yellow',
          }}>
          #GITHUB
        </h2>
        <Text sx={{ mx: [1, 4], textAlign: 'center', fontSize: [3] }}>
          We maintain our project on Github contributions in any form
          (documentation,code,adding resources,etc) are more than welcome!
        </Text>
        <div sx={{ textAlign: 'center', pt: [4], pb: [4] }}>
          <Button
            sx={{
              width: [150, 200],
              borderRadius: [8],
              color: 'black',
              bg: 'white',
              cursor: 'pointer',
              ':hover': {
                bg: 'yellow',
                color: 'white',
              },
            }}
            onClick={() =>
              window.open('https://github.com/hackclub/hackstore', '_blank')
            }>
            Github
          </Button>
        </div>
      </CustomBox>
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
    bottom: -4rem;
    right: -1rem;
    background-image: url(landingpage/github.png);
    width: 8rem;
    height: 10rem;
  }
`
