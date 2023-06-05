import Head from 'next/head'

import { Auth } from '@/components/Auth'


export default function Home() {
  return (
    <>
    <Head>
      <title>quiz app</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
  <Auth/>
  

  
    </main>
  </>
  )
}
