import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import ResultItem from './ResultItem'

const Result = () => {
  const convertions = [
    {
      _id: 1,
      currencyFrom: JSON.stringify({
        label: 'SixEleven',
        icon: 'https://assets.coinlayer.com/icons/611.png',
        key: '611',
        walletAddress: 'XHJJHHFD545644DDSJ5641DSSDSKJHHJ555'
      }),
      currencyTo: JSON.stringify({
        label: 'AB-Chain',
        icon: 'https://assets.coinlayer.com/icons/ABC.png',
        key: 'ABC',
        walletAddress: 'XHJJHHFD545644DDSJ5641DSSDSKJHHJ555'
      }),
      givenAmount: '50',
      receiveAmount: 79555.54545454,
      walletAddress: 'XHJJHHFD545644DDSJ5641DSSDSKJHHJ555',
      emailAddress: 'grimtherand@gmail.com',
      conversionRate: 102.5,
      createdAt: '2023-02-24T05:19:09.000+00:00',
      status: 'PENDING',
      paymentStatus: 'PENDING'
    },
    {
      _id: 2,
      currencyFrom: JSON.stringify({
        label: 'SixEleven',
        icon: 'https://assets.coinlayer.com/icons/611.png',
        key: '611',
        walletAddress: 'XHJJHHFD545644DDSJ5641DSSDSKJHHJ555'
      }),
      currencyTo: JSON.stringify({
        label: 'AB-Chain',
        icon: 'https://assets.coinlayer.com/icons/ABC.png',
        key: 'ABC',
        walletAddress: 'XHJJHHFD545644DDSJ5641DSSDSKJHHJ555'
      }),
      givenAmount: '75',
      receiveAmount: 3546568.2167,
      walletAddress: 'DXZHUJ897676FHDHJGKJHJGJ67887FHG',
      emailAddress: 'johndoe@example.com',
      conversionRate: 47287.08956,
      createdAt: '2023-02-24T08:30:45.000+00:00',
      status: 'PROCESSING',
      paymentStatus: 'PENDING'
    }
  ]
  return (
    <>
      <Heading fontWeight={600} fontSize={{ base: 'lg', sm: '2xl', md: '4xl' }}>
        Your Exchanges
      </Heading>
      <Box mt={8}>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)'
          }}
          gap={6}>
          {convertions.map((i, index) => (
            <ResultItem key={index} data={i} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Result
