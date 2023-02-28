import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import ResultItem from './ResultItem'

const Result = ({ searchResult }) => {
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
          {searchResult.map((i, index) => (
            <ResultItem key={index} data={i} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Result
