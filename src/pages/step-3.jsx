import Layout from '@/layout'
import {
  Box,
  Container,
  Grid,
  Heading,
  Progress,
  Stack,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

const Page = () => {
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
    conversionRate,
    status
  } = data || {}

  const steps = [
    {
      id: 'step1',
      title: 'Pending',
      icon: '/images/stopwatch.png',
      status: 'PENDING'
    },
    {
      id: 'step2',
      title: 'Processing',
      icon: '/images/process.png',
      status: 'PROCESSING'
    },
    {
      id: 'step3',
      title: 'Complete',
      icon: '/images/confirm.png',
      status: 'CONFIRMED'
    }
  ]
  return (
    <>
      <Head>
        <title>Pm2exchange - Step 3</title>
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
              Exchanging {currencyFrom?.label} to {currencyTo?.label} <br />
            </Heading>
            <Text fontSize={'xl'} py={4}>
              Feel free to bookmark this page and come back later. You can
              always find your exchanges through Track Exchange. The exchange
              will still be made if you leave this page.
            </Text>

            <Box py={4}>
              <Progress
                size={'lg'}
                isAnimated
                hasStripe
                value={
                  status === 'PENDING' ? 33 : status === 'PROCESSING' ? 66 : 100
                }
                colorScheme='green'
              />
              <Text my={4}>
                Please wait a few minutes while we receive your{' '}
                {currencyFrom?.label} on {currencyFrom?.walletAddress}
              </Text>
            </Box>

            <Grid
              templateColumns={{
                base: 'repeat(1,1fr)',
                md: 'repeat(2,1fr)',
                lg: 'repeat(3,1fr)'
              }}
              rowGap={10}
              columnGap={10}
              mt={10}>
              {steps.map((step, index) => (
                <Box
                  key={step.id}
                  position={'relative'}
                  bg={step.status === status ? 'green.300' : 'white'}
                  p='5'>
                  <Text
                    fontSize={'5xl'}
                    color='gray.200'
                    fontWeight='extrabold'
                    position={'absolute'}
                    top='12'>
                    {index + 1}
                  </Text>
                  <Stack alignItems='center' w='full'>
                    <Image
                      style={{
                        filter:
                          step.status === status
                            ? 'grayscale(0%)'
                            : 'grayscale(100%)'
                      }}
                      height={100}
                      width={100}
                      alt=''
                      src={step.icon}
                    />
                    <Text fontSize={'xl'}>{step.title}</Text>
                  </Stack>
                </Box>
              ))}
            </Grid>
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
