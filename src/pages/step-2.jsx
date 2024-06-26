import {
  Box,
  Button,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Spinner,
  Text
} from '@chakra-ui/react'
import Head from 'next/head'
import React, { useState } from 'react'
import { useQRCode } from 'next-qrcode'
import Layout from '@/layout'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'

const Page = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { id } = router.query || {}
  console.log({ id })

  const fetchConversion = async (id) => {
    try {
      const res = await axios.get(`/api/conversion?id=${id}`)
      const data = await res.data
      return data
    } catch (error) {
      console.log('Id not loaded')
    }
  }
  const { data, isLoading, refetch } = useQuery(['get-item', id], () =>
    fetchConversion(id)
  )
  const {
    _id,
    currencyFrom,
    currencyTo,
    givenAmount,
    receiveAmount,
    walletAddress,
    emailAddress,
    conversionRate
  } = data || {}
  const { Canvas } = useQRCode()
  const handleSubmit = () => {
    setLoading(true)
    axios
      .put(`/api/conversion?id=${id}`, {
        paymentStatus: 'PAID'
      })
      .then((res) => router.push(`/step-3?id=${id}`))
      .finally(() => setLoading(false))
  }
  return (
    <>
      <Head>
        <title>Pm2exchange - Step 2</title>
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
            {isLoading ? (
              <>
                <Spinner />
              </>
            ) : _id ? (
              <>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
                  Waiting for your {currencyFrom?.label} <br />
                </Heading>
                <Heading as='h4' size='md' color='blackAlpha.700' my={6}>
                  Transfer {givenAmount} {currencyFrom?.label} to this address:
                </Heading>
                <Text
                  fontSize={'xl'}
                  p={2}
                  border='2px'
                  borderColor={'green.600'}>
                  {currencyFrom?.walletAddress}
                </Text>
                <Box py={4}>
                  {currencyFrom?.walletAddress ? (
                    <Canvas
                      text={currencyFrom?.walletAddress}
                      options={{
                        level: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                          dark: '#000',
                          light: '#FFF'
                        }
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Box>

                <Text fontSize={'xl'} py={2}>
                  Please verify that the wallet address you provided is correct
                  before transfering the coins, as the transaction cannot be
                  canceled once you transfer the coins.
                </Text>
                <Text fontSize={'xl'} py={2}>
                  Once you transfer the coins and the network has confirmed the
                  transaction, the exchanged coins will be sent to the address
                  you provided: {walletAddress}
                </Text>
                <Button
                  isLoading={loading}
                  size={'lg'}
                  colorScheme='green'
                  my='5'
                  onClick={handleSubmit}>
                  Yes! I have now transfered the coins
                </Button>
              </>
            ) : (
              <>Nothing found</>
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
