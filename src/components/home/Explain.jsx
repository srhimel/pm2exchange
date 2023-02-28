import { useRouter } from 'next/router'

const {
  Box,
  Grid,
  GridItem,
  Stack,
  Container,
  Text
} = require('@chakra-ui/react')

const steps = [
  {
    key: 'step-1',
    step: 1,
    details:
      'Choose currency, provide receiving wallet and amount to exchange or pay'
  },
  {
    key: 'step-2',
    step: 2,
    details: 'Transfer to your temporary BTC2USDT.com address.'
  },
  {
    key: 'step-3',
    step: 3,
    details: 'Receive or pay coins in the chosen currency.'
  }
]

const Explain = () => {
  return (
    <Box mt={{ base: 10, md: 20 }}>
      <Container maxW={'6xl'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={6}>
          {steps.map((step) => (
            <Stack
              key={step.key}
              flexDirection={'row'}
              gap={6}
              alignItems='baseline'>
              <Box
                flex={'none'}
                h={8}
                w={8}
                bg='white'
                rounded={'full'}
                display='flex'
                justifyContent={'center'}
                alignItems='center'>
                {step.step}
              </Box>
              <Text> {step.details}</Text>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Explain
