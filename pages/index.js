import Head from 'next/head'
import Header from '../stories/Header'
import Hero from '../components/mainpage/heroimage'
import Intro from '../components/mainpage/intro'
import Philiosophy from '../components/mainpage/philosophy'

export default () => (
  <div>
    <Head>
      <title>Hack Box</title>
    </Head>
    <Header bg='white' />
    <Hero />
    <Intro />
    <Philiosophy />
  </div>
)
