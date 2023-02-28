import About from '@/components/home/About'
import Explain from '@/components/home/Explain'
import Featured from '@/components/home/Featured'
import Pairing from '@/components/home/Pairing'
import Testimonials from '@/components/Testimonials'
import Layout from '@/layout'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Hero from '@/components/home/Hero'
import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Home() {
  const { data, isLoading } = useQuery(['currency-rate'], () =>
    axios.get('/api/api-response').then((res) => res.data)
  )
  return (
    <>
      <Head>
        <title>BTC2USDT</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero data={data} isLoading={isLoading} />
        <Featured data={data} isLoading={isLoading} />
        <Pairing data={data} isLoading={isLoading} />
        <About />
        {/* <Testimonials /> */}
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
