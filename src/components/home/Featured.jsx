import useCoin from '@/lib/hooks/useCoin'
import {
  Box,
  Container,
  Grid,
  HStack,
  Skeleton,
  SkeletonCircle,
  Stat,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Featured = ({ data, isLoading }) => {
  const { data: items } = useCoin()

  let content
  if (isLoading) {
    content = (
      <>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}>
          <SkaletonBox />
          <SkaletonBox />
          <SkaletonBox />
          <SkaletonBox />
        </Grid>
      </>
    )
  }

  if (!isLoading && items?.length) {
    content = (
      <>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}>
          {items.slice(0, 4).map((item) => (
            <Box
              key={item?.key}
              bg='white'
              p={5}
              rounded='2xl'
              boxShadow={'xl'}>
              <Stat>
                <StatLabel>
                  <HStack spacing='24px'>
                    <Image src={item?.icon} alt='' width={35} height={35} />
                    <HStack>
                      <Text fontSize={'md'}>{item?.label}</Text>
                      <Text color={'gray.500'} fontSize={'lg'}>
                        {item?.key}
                      </Text>
                    </HStack>
                  </HStack>
                </StatLabel>
                <StatNumber
                  textAlign={'center'}
                  mt='3'
                  fontSize={34}
                  fontWeight='medium'>
                  $
                  {data?.rates?.[item.key]
                    ? data?.rates?.[item.key].toFixed(2)
                    : 0}
                </StatNumber>
              </Stat>
            </Box>
          ))}
        </Grid>
      </>
    )
  }
  if (!isLoading && !items?.length) {
    content = <></>
  }
  return (
    <Box mt={'-16'}>
      <Container maxW={'container.xl'}>{content}</Container>
    </Box>
  )
}

export default Featured

export const SkaletonBox = () => {
  return (
    <Box bg='white' p={5} rounded='2xl' boxShadow={'xl'}>
      <Stat>
        <StatLabel>
          <HStack spacing='24px'>
            <SkeletonCircle size='10' />
            <HStack>
              <Skeleton height='20px' w={20} />
            </HStack>
          </HStack>
        </StatLabel>
        <StatNumber
          textAlign={'center'}
          mt='3'
          fontSize={34}
          fontWeight='medium'>
          <Skeleton height='20px' />
        </StatNumber>
      </Stat>
    </Box>
  )
}
