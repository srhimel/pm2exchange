import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const About = (props) => {
  return (
    <Box pb={'20'} {...props}>
      <Container maxW={'container.xl'}>
        <Box maxW={'3xl'} margin='auto'>
          <Heading as='h2' size='2xl' textAlign={'center'} color='green.600'>
            What is Evonax?
          </Heading>
          <Text
            color={'gray.600'}
            fontSize='xl'
            mt={'25px !important'}
            textAlign='center'
            fontWeight={'light'}>
            Evonax is the one thing missing from the cryptocurrency world. It
            offers easy, fast and secure exchanges of the most popular
            cryptocurrencies.
          </Text>
        </Box>
        <Box py='14'>
          <Divider />
        </Box>

        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            lg: 'repeat(2,1fr)'
          }}
          gap={20}
          alignItems='center'>
          <Box>
            <HStack gap={10} alignItems='self-start' mt={4}>
              <Image height={50} width={50} alt='' src='/images/no-fee.png' />
              <Box>
                <Heading as='h4' size='md' color='blackAlpha.700'>
                  No fees
                </Heading>
                <Text color={'gray.600'} fontWeight={'light'} mt={3}>
                  What you see is what you get in our cryptocurrency exchange
                  service. Calculating and predicting miner fees in a
                  cryptocurrency transaction is almost impossible.
                </Text>
              </Box>
            </HStack>
            <HStack gap={10} alignItems='self-start' mt={10}>
              <Image
                height={50}
                width={50}
                alt=''
                src='/images/clipboard.png'
              />
              <Box>
                <Heading as='h4' size='md' color='blackAlpha.700'>
                  No registration
                </Heading>
                <Text color={'gray.600'} fontWeight={'light'} mt={3}>
                  Fast and simple cryptocurrency exchanges do not play well with
                  complicated user registration forms where all kinds of
                  unnecessary information change hands, so we simply skipped
                  that part.
                </Text>
              </Box>
            </HStack>
            <HStack gap={10} alignItems='self-start' mt={10}>
              <Image height={50} width={50} alt='' src='/images/mask.png' />
              <Box>
                <Heading as='h4' size='md' color='blackAlpha.700'>
                  Total anonymity
                </Heading>
                <Text color={'gray.600'} fontWeight={'light'} mt={3}>
                  Cryptocurrencies are all about anonymity and we are all about
                  cryptocurrencies. So in the spirit of anonymity, we will not
                  ask you to provide any personal information in order to use
                  our cryptocurrency exchange service.
                </Text>
              </Box>
            </HStack>
            <HStack gap={10} alignItems='self-start' mt={10}>
              <Image height={50} width={50} alt='' src='/images/instant.png' />
              <Box>
                <Heading as='h4' size='md' color='blackAlpha.700'>
                  Instant transfer
                </Heading>
                <Text color={'gray.600'} fontWeight={'light'} mt={3}>
                  Instant may be a big word in the world of cryptocurrencies. We
                  will process the cryptocurrency exchange as quickly as the
                  network confirms your transfer.
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box position={'relative'}>
            <Image src='/dot-map.jpg' alt='' width={700} height={300} />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
