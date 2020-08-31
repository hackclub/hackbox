/**@jsx jsx*/

import { jsx, Grid } from 'theme-ui'
import Header from '../stories/Header'
import Footer from '../components/footer'
import Intro from '../components/team/introduction/index'
import Card from '../components/team/card'
export default () => (
  <div>
    <Header bg='white' />
    <Intro />
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
    <Footer />
  </div>
)
