import Head from 'next/head'
import Header from '../stories/Header'
import Hero from '../components/mainpage/heroimage'
import Intro from '../components/mainpage/intro'
import Philiosophy from '../components/mainpage/philosophy'
import Working from '../components/mainpage/working'
import Github from '../components/mainpage/github'
import Contents from '../components/mainpage/content'
import Download from '../components/mainpage/download'
import Footer from '../components/footer'
export default () => (
  <div>
    <Head>
      <title>Hack Box</title>
    </Head>
    <Header bg='white' />
    <Hero />
    <Intro />
    <Philiosophy />
    <Working />
    <Github />
    <Contents />
    <Download />
    <Footer />
  </div>
)
