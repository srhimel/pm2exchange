import Result from '@/components/track-exchange/Result'
import Layout from '@/layout'
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Input,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'

const Page = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const handleSearch = async () => {
    const res = await axios.get(`/api/track-status?search=${searchInput}`)
    const data = await res.data
    setSearchResult(data)
  }
  return (
    <>
      <Head>
        <title>Pm2exchange - Track Exchange</title>
        <meta
          name='description'
          content='pm2exchange.com allows you to convert Bitcoin to USD quickly and securely. Get instant conversion rates and trade your Bitcoin for USD now!'
        />

        <meta
          name='keywords'
          content='Pm2exchange, pm2exchange.com, BTC to USD, Bitcoin to USD, BTC to USD conversion, Bitcoin to USDT converter, cryptocurrency converter, crypto to fiat converter, cryptocurrency exchange.'
        />

        <meta
          name='google-site-verification'
          content='ZGjoM4qlHj2zrYR_FaX3ObOwmMn27_CDnuBGkJzAL-M'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box bg='green.100' py={'20'}>
          <Container maxW={'container.xl'}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
              Enter Email or Wallet Address <br />
            </Heading>
            <Grid
              gap={20}
              templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
              mt={20}>
              <Box bg={'whiteAlpha.800'} p={4} rounded='xl' boxShadow={'sm'}>
                <Input
                  size={'lg'}
                  placeholder={`Enter email or wallet address`}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button
                  colorScheme='green'
                  w={'full'}
                  mt={5}
                  size='lg'
                  onClick={handleSearch}>
                  Start Exchange
                </Button>
              </Box>
              <Box>
                <Text fontSize={'lg'}>
                  Find information about any ongoing or completed exchanges.
                  Enter your email or wallet address to see all previous
                  exchanges to that address.
                </Text>
                <Text fontSize={'lg'} py={4}>
                  If you have any questions about your exchanges, please refer
                  to our FAQ or contact our support team here.
                </Text>
              </Box>
            </Grid>
            {searchResult?.length ? (
              <>
                <Box mt={20}>
                  <Result searchResult={searchResult} />
                </Box>
              </>
            ) : (
              <></>
            )}
          </Container>
        </Box>
      </main>
    </>
  )
}
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
