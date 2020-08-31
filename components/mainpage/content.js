/**@jsx jsx*/
import { jsx, Box, Text, Grid, Flex } from 'theme-ui'

export default () => (
  <Box as='section' sx={{ variant: 'sectionbox' }}>
    <h1 sx={{ color: 'green' }}>What is included in the box?</h1>
    <Text>
      We are providing a{' '}
      <span
        sx={{
          background:
            'linear-gradient(-100deg,rgba(51,214,166,0.33),rgba(51,214,166,0.95),rgba(243,234,164,0.1))',
        }}>
        complete package of resources of all types with the hack box, these
      </span>
      &nbsp; resources will make sure that people using it will have access to
      education in a wide range off topics!
    </Text>
    <Grid columns={[2, 2, 3, 4]} sx={{ pt: [4] }}>
      {arr.map((ele) => (
        <ContentElement text={ele.text} bg={ele.bg} background={ele.bggrad} />
      ))}
    </Grid>
  </Box>
)

const ContentElement = ({ text, bg, background }) => (
  <Flex
    sx={{
      bg: bg ? bg : 'steel',
      // background: background ? background : null,
      color: 'white',
      height: [150],
      borderRadius: [3, 5],
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <h2 sx={{ textAlign: 'center', fontSize: [3, 4], wordBreak: 'break-word' }}>
      {text}
    </h2>
  </Flex>
)

const arr1 = [
  '#Programming',
  '#Courses',
  '#Books',
  '#Khan Academy',
  '#Music',
  '#Graphics',
  '#Workshops',
  '#Operating System',
]

const arr = [
  {
    text: '#Programming',
    bg: 'red',
    bggrad: 'linear-gradient(180deg, #FF1334 7.38%, #C90C26 100%)',
  },
  {
    text: '#Courses',
    bg: 'purple',
    bggrad: 'linear-gradient(180deg, #B618F8 0%, #8406B8 100%)',
  },
  {
    text: '#Books',
    bg: 'yellow',
    bggrad: 'linear-gradient(180deg, #FFDB48 0%, #C8A000 100%)',
  },
  {
    text: '#Khan Academy',
    bg: 'orange',
    bggrad: 'linear-gradient(180deg, #FF9C53 0%, #EB6400 100%)',
  },
  {
    text: '#Music',
    bg: 'green',
    bggrad: 'linear-gradient(180deg, #16EDAE 0%, #16BA8A 100%)',
  },
  {
    text: '#Graphics',
    bg: 'steel',
    bggrad: 'linear-gradient(180deg, #3C5F89 0%, #212D3C 100%)',
  },
  {
    text: '#Workshops',
    bg: 'blue',
    bggrad: 'linear-gradient(180deg, #4A9BDE 0%, #145891 100%)',
  },
  {
    text: '#Operating System',
    bg: 'cyan',
    bggrad: ' linear-gradient(180deg, #38C1EA 0%, #06789A 100%)',
  },
]
