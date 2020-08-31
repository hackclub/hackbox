/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import Intro from '../components/team/introduction/index'
import Card from '../components/team/card'
import Fade from 'react-reveal/Fade'
import Meta from '../meta/index'
import Head from 'next/head'

export default () => (
  <div>
    <Header bg='white' />
    <Meta
      as={Head}
      title='Team'
      description='Meet the team behind Hack Box'
      //  image="https://workshop-cards.hackclub.com/Press.png?fontSize=350px&brand=HQ"
    />
    <Intro />
    <Fade left clear>
      <Grid columns={[1, 1, 2]} sx={{ pb: 5, mt: [4, 5] }}>
        <Card
          url={'athul'}
          name='Athul Blesson'
          position='Regional Director at Hack Club'
        />
        <Card
          url={'annlee'}
          name='Annlee Fores'
          position='COO at Hack Club APAC'
        />
        <Card url={'arun'} name='Arun Mani' position='CTO at Hack Club APAC' />
        <Card
          url={'harsh'}
          name='Harsh Bajpai'
          position='SWE Intern Hack Club APAC'
        />
      </Grid>
    </Fade>
    <Footer />
  </div>
)
