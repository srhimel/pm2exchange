import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Pairing = () => {
  return (
    <Box py={'20'}>
      <Container maxW={'container.xl'}>
        <HStack gap={12}>
          <Box w='2xl' display={{ base: 'none', xl: 'block' }}>
            <Divider />
          </Box>
          <Box w='full'>
            <Heading as='h2' size='2xl' textAlign={'center'} color='green.600'>
              Cryptocurrency Pairing
            </Heading>
          </Box>
          <Box w='2xl' display={{ base: 'none', xl: 'block' }}>
            <Divider />
          </Box>
        </HStack>

        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)'
          }}
          rowGap={10}
          columnGap={10}
          mt={20}>
          {/* Single  */}
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
          {/* Single End */}
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
          <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/btc.png' />
                  <Text>Bitcoin</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src='/coins/eth.png' />
                  <Text>Etharium</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>14.50320013</Text>
            </HStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Pairing
