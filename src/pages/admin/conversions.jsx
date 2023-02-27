import ConversionItem from '@/components/admin/conversions/ConversionItem'
import Layout from '@/layout/admin/Layout'
import { Box, Grid, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Page = () => {
  const fetchConversion = async () => {
    try {
      const res = await axios.get(`/api/conversion`)
      const data = await res.data
      return data
    } catch (error) {
      console.log('Id not loaded')
    }
  }
  const { data, isLoading, refetch } = useQuery(
    ['get-conversions'],
    fetchConversion
  )
  return (
    <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(4,1fr)'
          }}
          gap={6}>
          {data?.length
            ? data.map((i, index) => (
                <ConversionItem key={index} data={i} refetch={refetch} />
              ))
            : ''}
        </Grid>
      )}
    </Box>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
