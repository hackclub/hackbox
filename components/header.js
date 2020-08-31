/**@jsx jsx */
import { jsx, Flex, Grid, Box } from 'theme-ui'
import styled from '@emotion/styled'
//import flag from './assets/Header/hackclubflag.png'
import Icon from '@hackclub/icons'
/***
 * Header of the website
 */

export default ({ bg }) => {
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
        zIndex: 1000,
        minHeight: '70px',
        opacity: '0.97',
        position: 'fixed',
        borderBottom: '1px solid rgba(48, 48, 48, 0.125)',
      }}>
      <Flex sx={{ width: '100%' }}>
        <img
          src={'hackclubflag.png'}
          sx={{
            width: ['110px', '120px'],
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
          <Icon
            sx={{ mr: [3], display: ['initial', 'initial', 'none'] }}
            glyph='menu'
            size='48px'
          />{' '}
        </Flex>
      </Flex>
    </Box>
  )
}

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
  { text: 'FAQ', url: 'faq' },
]
