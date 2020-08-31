import { BaseStyles, Box, Button, Container, Grid, Heading } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Press from '../components/faq.mdx'

export default () => (
  <>
    <Meta
      as={Head}
      title='FAQs'
      description='Hack Club Alexa Challenge FAQ i.e Frequently Asked Questions'
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
          Some of the most asked questions about the challenge
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
        Should I be a Hack Club Member in order to join the challenge ?
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
