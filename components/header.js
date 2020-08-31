/**@jsx jsx */
import { jsx, Flex, Grid, Box } from 'theme-ui'
import styled from '@emotion/styled'
import Icon from '@hackclub/icons'
import { useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { withResizeDetector } from 'react-resize-detector'
import Bounce from 'react-reveal/Bounce'

/***
 * Header of the website
 */

export default withResizeDetector(({ width, bg }) => {
  const [scroll, setscroll] = useState(false)

  if (width > 767) {
    if (scroll) setscroll(false)
  }

  const Menu = () => (
    <span
      onClick={() => {
        setscroll(!scroll)
      }}>
      <svg
        fill-rule='evenodd'
        clip-rule='evenodd'
        stroke-linejoin='round'
        stroke-miterlimit='1.414'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='menu'
        viewBox='0 0 32 32'
        preserveAspectRatio='xMidYMid meet'
        fill='currentColor'
        width='42'
        height='42'
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
        }}>
        <g>
          <path d='M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z'></path>
          <path d='M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z'></path>
          <path d='M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z'></path>
        </g>
      </svg>
    </span>
  )

  return (
    <Box
      as='header'
      columns={[2, 2, 3, 3]}
      sx={{
        width: '100%',
        background: bg
          ? bg
          : `linear-gradient(90.37deg, #5BC0DE 1.92%, #338EDA 78.03%)`,
        display: 'fixed',
        zIndex: 5000,
        minHeight: '70px',
        opacity: '0.97',
        position: 'fixed',
        borderBottom: '1px solid rgba(48, 48, 48, 0.125)',
      }}>
      <ScrollLock isActive={scroll} />
      <Overlay display={scroll} />
      <Flex sx={{ width: '100%' }}>
        <img
          onClick={() => {
            console.log('testing')
          }}
          src={'hackclubflag.png'}
          sx={{
            width: ['100px', '110px', '120px'],
            position: 'absolute',
            ml: [2, 3, 2, 5],
          }}
        />
        <Flex
          as='nav'
          sx={{
            flex: 1,
            alignItems: 'center',
            flexDirection: ['row-reverse', 'row-reverse', 'row'],
            justifyContent: ['initial', 'initial', 'center'],
            a: {
              fontSize: '20px',
              display: ['none', 'none', 'initial'],
              mx: 3,
              color: bg ? 'black' : 'white',
              cursor: 'pointer',
              fontWeight: 'normal',
            },
          }}>
          <Nav data={data} />
          <span
            onClick={() => {
              setscroll(!scroll)
              console.log(width)
            }}
            sx={{ position: 'absolute', zIndex: 2000 }}>
            <Icon
              sx={{
                mr: [3],
                display: [
                  scroll ? 'none' : 'initial',
                  scroll ? 'none' : 'initial',
                  'none',
                ],
              }}
              glyph='menu'
              size={['44px']}
            />
            <Icon
              sx={{
                mr: [3],
                display: [
                  !scroll ? 'none' : 'initial',
                  !scroll ? 'none' : 'initial',
                  'none',
                ],
              }}
              size={['44px']}
              glyph='view-close'
            />
          </span>
        </Flex>
      </Flex>
    </Box>
  )
})

const Customh3 = styled.h3``
const Nav = ({ data }) => (
  <>
    {data.map((ele) => (
      <Customh3 as='a' href={ele.url ? ele.url : '#'}>
        {ele.text}
      </Customh3>
    ))}
  </>
)

const data = [
  { text: 'Home', url: './' },
  { text: 'Team', url: './team' },
  { text: 'Installation', url: './' },
  { text: 'Github', url: 'https://github.com/hackclub/hackstore' },
  { text: 'FAQs', url: 'faq' },
]

const Overlay = ({ display }) => (
  <div
    sx={{
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      bg: 'white',
      opacity: '0.99',
      display: display ? 'flex' : 'none',
      pt: '90px',
      flexDirection: 'column',
    }}>
    <OverlayItem Text={'Home'} url='./' />
    <OverlayItem Text={'Team'} url='./team' />
    <OverlayItem Text={'Installation'} url='./' />
    <OverlayItem Text={'FAQs'} url='faq' />
    <OverlayItem Text={'Github'} url='https://github.com/hackclub/hackstore' />
  </div>
)

const OverlayItem = ({ Text, url }) => (
  <div sx={{ ml: 4, my: 0 }}>
    <p
      sx={{
        fontSize: 2,
        my: 2,
        width: '80%',
        borderBottom: '1px solid',
        borderColor: 'smoke',
        pb: 3,
        pl: 3,
      }}>
      <Bounce top>
        <b
          sx={{ fontWeight: 'regular', ':hover': { cursor: 'pointer' } }}
          onClick={() => Open(url)}>
          {Text}
        </b>
      </Bounce>
    </p>
  </div>
)

const Open = (url) => {
  window.open(url, '_self')
}
