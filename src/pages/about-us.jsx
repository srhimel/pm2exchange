import Features from '@/components/about/Features'
import Layout from '@/layout'
import { Box, Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>BTC2USDT</title>
        <meta
          name='description'
          content='pm2exchange.com allows you to convert Bitcoin to USD quickly and securely. Get instant conversion rates and trade your Bitcoin for USD now!'
        />

        <meta
          name='keywords'
          content='btc2usdt, pm2exchange.com, BTC to USD, Bitcoin to USD, BTC to USD conversion, Bitcoin to USDT converter, cryptocurrency converter, crypto to fiat converter, cryptocurrency exchange.'
        />

        <meta
          name='google-site-verification'
          content='ZGjoM4qlHj2zrYR_FaX3ObOwmMn27_CDnuBGkJzAL-M'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box
          bgColor={'green.100'}
          pt={{ base: 8, md: 20 }}
          pb={{ base: 16, md: 32 }}>
          <Container maxW={'container.xl'}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
              About Us
              <br />
            </Heading>
          </Container>
        </Box>
        <Box pt={{ base: 8, md: 20 }} pb={{ base: 16, md: 32 }}>
          <Container maxW={'container.xl'}>
            <Features />
          </Container>
        </Box>
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
