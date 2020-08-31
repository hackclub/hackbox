import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/mainpage/heroimage'
import Intro from '../components/mainpage/intro'
import Philiosophy from '../components/mainpage/philosophy'
import Working from '../components/mainpage/working'
import Github from '../components/mainpage/github'
import Contents from '../components/mainpage/content'
import Download from '../components/mainpage/download'
import Footer from '../components/footer'
import Meta from '../meta/index'

export default () => (
  <div>
    <Meta
      as={Head}
      description='Hack Box is an initiative to provide internet resources to the most remote parts of the world'
      //  image="https://workshop-cards.hackclub.com/Press.png?fontSize=350px&brand=HQ"
    />{' '}
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
