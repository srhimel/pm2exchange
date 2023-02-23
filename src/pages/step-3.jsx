import {
  Box,
  Button,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text
} from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { useQRCode } from 'next-qrcode'
import Image from 'next/image'

const StepThree = () => {
  const { Canvas } = useQRCode()
  return (
    <>
      <Head>
        <title>Create Next next</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box bg='green.100' py={'20'}>
          <Container maxW={'container.xl'}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
              Exchanging LINK to BTC <br />
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
                value={20}
                colorScheme='green'
              />
              <Text my={4}>
                Please wait a few minutes while we receive your Chainlink on
                0xf6d3e2a6ad525fea8ad8ae0b3c5608143aa332e2
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
              <Box position={'relative'} bg={'green.300'} p='5'>
                <Text
                  fontSize={'5xl'}
                  color='gray.200'
                  fontWeight='extrabold'
                  position={'absolute'}
                  top='12'>
                  1
                </Text>
                <Stack alignItems='center' w='full'>
                  <Image
                    style={{
                      filter: 'grayscale(0%)'
                    }}
                    height={100}
                    width={100}
                    alt=''
                    src='/images/stopwatch.png'
                  />
                  <Text fontSize={'xl'}>Pending</Text>
                </Stack>
              </Box>
              <Box position={'relative'} bg={'white'} p='5'>
                <Text
                  fontSize={'5xl'}
                  color='gray.200'
                  fontWeight='extrabold'
                  position={'absolute'}
                  top='12'>
                  2
                </Text>
                <Stack alignItems='center' w='full'>
                  <Image
                    style={{
                      filter: 'grayscale(100%)'
                    }}
                    height={100}
                    width={100}
                    alt=''
                    src='/images/process.png'
                  />
                  <Text fontSize={'xl'}>Processing</Text>
                </Stack>
              </Box>
              <Box position={'relative'} bg={'white'} p='5'>
                <Text
                  fontSize={'5xl'}
                  color='gray.200'
                  fontWeight='extrabold'
                  position={'absolute'}
                  top='12'>
                  3
                </Text>
                <Stack alignItems='center' w='full'>
                  <Image
                    style={{
                      filter: 'grayscale(100%)'
                    }}
                    height={100}
                    width={100}
                    alt=''
                    src='/images/confirm.png'
                  />
                  <Text fontSize={'xl'}>Complete</Text>
                </Stack>
              </Box>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  )
}

export default StepThree
