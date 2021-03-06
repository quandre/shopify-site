import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero3 from '../components/Hero/Hero3/Hero3'
import Collection1 from '../components/Collections/Collection1/Collection1'
import Collection3 from '../components/Collections/Collection3/Collection3'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (<MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero3 />
      <Collection1 />
      <Collection3 />
      <Footer/>
    </MainLayout>
  )
}
