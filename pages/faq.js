import { BaseStyles, Box, Button, Container, Grid, Heading } from 'theme-ui'
import Meta from '../meta/index'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Press from '../components/faq.mdx'

export default () => (
  <>
    <Meta
      as={Head}
      title='FAQs'
      description='Hack Box is an intiative to provide internet resources to the most remote parts of the world'
      //  image="https://workshop-cards.hackclub.com/Press.png?fontSize=350px&brand=HQ"
    />
    <Header bg='white' />
    <Box
      as='header'
      sx={{
        bg: 'sheet',
        color: 'text',
        pt: [5, null, null, null, 6],
        pb: [3, 4, 5, null, 6],
        textAlign: 'center',
      }}>
      <Container variant='copy'>
        <Heading as='h1' variant='title' sx={{ color: 'primary', mt: [2, 4] }}>
          FAQ ( Frequently Asked Questions )
        </Heading>
        <Heading as='h2' variant='subtitle' sx={{ mt: 3, color: 'text' }}>
          Some of the most asked questions about Hack Box
        </Heading>
      </Container>
    </Box>
    <Container
      variant='main'
      sx={{
        py: [3, 4],
        px: 3,
        maxWidth: [null, 'copyUltra'],
        h2: { variant: 'text.headline' },
      }}>
      <Heading id='banners' variant='headline'>
        What is Hack Store?
      </Heading>
      <Box
        as={BaseStyles}
        sx={{
          mx: 0,
          fontSize: 2,
          '> p': { maxWidth: 'copy' },
          h2: { variant: 'text.headline', mt: 4 },
        }}>
        <Press />
      </Box>
    </Container>
    <Footer />
  </>
)
