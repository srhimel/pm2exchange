import ConversionItem from '@/components/admin/conversions/ConversionItem'
import Layout from '@/layout/admin/Layout'
import { Box, Grid } from '@chakra-ui/react'
import React from 'react'

const convertions = [
  {
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
    status: 'PENDING'
  },
  {
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
    status: 'PROCESSING'
  },
  {
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
    givenAmount: '1000',
    receiveAmount: 839.2,
    walletAddress: 'ASDFHJKUJ567898UYTR5678YHBGTREW12',
    emailAddress: 'janedoe@example.com',
    conversionRate: 0.8392,
    createdAt: '2023-02-24T11:45:21.000+00:00',
    status: 'CONFIRMED'
  },
  {
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
    receiveAmount: 4491.875,
    walletAddress: 'KJHGFDSA321YTREWQ12UYTGFDSAWQ1234',
    emailAddress: 'bobsmith@example.com',
    conversionRate: 1.79675,
    createdAt: '2023-02-24T15:10:36.000+00:00',
    status: 'CONFIRMED'
  },
  {
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
    givenAmount: '350',
    receiveAmount: 6.0835536,
    walletAddress: 'FJHGGYR6789UJNBVGFT678UIJHGTY6778',
    emailAddress: 'jessicajones@example.com',
    conversionRate: 0.01738288,
    createdAt: '2023-02-24T18:55:12.000+00:00',
    status: 'CANCELLED'
  },
  {
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
    givenAmount: '150',
    receiveAmount: 462.583333,
    walletAddress: 'PLKJHGFDSA123456YTREWQ67890MNHYT',
    emailAddress: 'johnsmith@example.com',
    conversionRate: 3.08388889,
    createdAt: '2023-02-24T22:20:57.000+00:00',
    status: 'PROCESSING'
  }
]

const Page = () => {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(4,1fr)'
        }}
        gap={6}>
        {convertions.map((i, index) => (
          <ConversionItem key={index} data={i} />
        ))}
      </Grid>
    </Box>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
