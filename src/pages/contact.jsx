import About from '@/components/home/About'
import Layout from '@/layout'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>BTC2USDT</title>
        <meta name='description' content='Generated by create next app' />
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
              Contact Us
              <br />
            </Heading>
            <Text color={'green.900'} fontSize='xl' mt={'25px !important'}>
              Email us:{' '}
              <a
                href='mailto:btc2usdtofficial@gmail.com'
                target='_blank'
                rel='noreferrer'>
                btc2usdtofficial@gmail.com
              </a>
            </Text>
          </Container>
        </Box>
        <Box bgColor={''} pt={{ base: 8, md: 20 }} pb={{ base: 8, md: 20 }}>
          <Container maxW={'container.xl'}>
            <About />
          </Container>
        </Box>
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
