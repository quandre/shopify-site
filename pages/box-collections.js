import Head from 'next/head'
import ShowLayout from '../components/layouts/ShowLayout'
import BoxCollection1 from '../components/BoxCollection/BoxCollection1/BoxCollection1'
export default function  BoxCollections() {
  return (<ShowLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All  Box Collections</h1>
      <div className="comp-space">
        < BoxCollection1  />
      </div>
    </ShowLayout>
  )
}