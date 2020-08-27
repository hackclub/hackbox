import Head from 'next/head'
import Header from '../stories/Header'
import Hero from '../components/mainpage/heroimage'
export default () => (
  <div>
    <Head>
      <title>Hack Box</title>
    </Head>
    <Header bg='white' />
    <Hero />
  </div>
)
