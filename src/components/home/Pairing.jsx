import useCoin from '@/lib/hooks/useCoin'
import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Pairing = ({ rates }) => {
  const { data, isLoading } = useCoin()
  const getConversionRate = (currOne, currTwo) => {
    const inCurr = rates?.rates[currOne]
    const outCurr = rates?.rates[currTwo]
    return (inCurr / outCurr).toFixed(8)
  }
  let content
  if (isLoading) {
    content = (
      <>
        <SkaletonCoin />
        <SkaletonCoin />
        <SkaletonCoin />
      </>
    )
  }

  if (!isLoading && data.length) {
    const combination = data.slice(0, 7).map((i, _i, a) => {
      return {
        first: i,
        second: a[_i + 1]
      }
    })
    const sortedCombination = combination.filter((i) => i.second)

    content = (
      <>
        {sortedCombination.map((i, _i) => (
          <Box
            key={`rendam-coin-${_i}`}
            border={'1px'}
            rounded='md'
            borderColor={'gray.200'}>
            <HStack
              justifyContent={'space-between'}
              px={6}
              py={4}
              bg='gray.50'
              rounded='md'>
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src={i?.first?.icon} />
                  <Text>{i?.first?.label}</Text>
                </HStack>
              </Box>
              <Image height={20} width={20} alt='' src='/ic-pair.svg' />
              <Box>
                <HStack>
                  <Image height={20} width={20} alt='' src={i?.second?.icon} />
                  <Text>{i?.second?.label}</Text>
                </HStack>
              </Box>
            </HStack>
            <HStack px={6} py={4} gap={5}>
              <Text color={'gray.500'} fontSize='sm'>
                Rate:
              </Text>
              <Text>{getConversionRate(i?.first?.key, i?.second?.key)}</Text>
            </HStack>
          </Box>
        ))}
      </>
    )
  }

  if (!isLoading && !data.length) {
    content = <></>
  }
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
          {content}
        </Grid>
      </Container>
    </Box>
  )
}

export default Pairing

export const SkaletonCoin = () => {
  return (
    <Box border={'1px'} rounded='md' borderColor={'gray.200'}>
      <HStack
        justifyContent={'space-between'}
        px={6}
        py={4}
        bg='gray.50'
        rounded='md'>
        <Box>
          <HStack>
            <SkeletonCircle size='5' />
            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
          </HStack>
        </Box>
        <SkeletonCircle size='5' />
        <Box>
          <HStack>
            <SkeletonCircle size='5' />
            <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
          </HStack>
        </Box>
      </HStack>
      <HStack px={6} py={4} gap={5}></HStack>
    </Box>
  )
}
