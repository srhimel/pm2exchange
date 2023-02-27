import useCoin from '@/lib/hooks/useCoin'
import {
  Box,
  Container,
  Grid,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Featured = ({ data, isLoading }) => {
  const { data: items } = useCoin()
  return (
    <Box mt={'-16'}>
      <Container maxW={'container.xl'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}>
          {items?.length
            ? items.slice(0, 4).map((item) => (
                <Box
                  key={item.key}
                  bg='white'
                  p={5}
                  rounded='2xl'
                  boxShadow={'xl'}>
                  <Stat>
                    <StatLabel>
                      <HStack spacing='24px'>
                        <Image src={item.icon} alt='' width={35} height={35} />
                        <HStack>
                          <Text fontSize={'md'}>{item.label}</Text>
                          <Text color={'gray.500'} fontSize={'lg'}>
                            {item.key}
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
              ))
            : ''}
        </Grid>
      </Container>
    </Box>
  )
}

export default Featured
