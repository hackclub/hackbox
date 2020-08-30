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
        {' '}
        complete package of resources of all types with the hack box, these
      </span>
      &nbsp; resources will make sure that people using it will have access to
      education in a wide range off topics!
    </Text>
    <Grid columns={[2, 2, 3, 4]} sx={{ pt: [4] }}>
      {arr.map((ele) => (
        <ContentElement text={ele.text} bg={ele.bg} />
      ))}
    </Grid>
  </Box>
)

const ContentElement = ({ text, bg }) => (
  <Flex
    sx={{
      bg: bg ? bg : 'steel',
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
  { text: '#Programming', bg: 'red' },
  { text: '#Courses', bg: 'purple' },
  { text: '#Books', bg: 'yellow' },
  { text: '#Khan Academy', bg: 'orange' },
  { text: '#Music', bg: 'green' },
  { text: '#Graphics', bg: 'steel' },
  { text: '#Workshops', bg: 'blue' },
  { text: '#Operating System', bg: 'cyan' },
]
