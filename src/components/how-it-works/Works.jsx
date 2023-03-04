import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'

const Work = ({ title, text, icon }) => {
  return (
    <Stack
      alignItems={'center'}
      border='1px'
      borderColor={'green.300'}
      px={8}
      py={10}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'blackAlpha.700'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text textAlign={'center'} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  )
}

export default function Works() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        alignItems='stretch'>
        <Work
          icon={<Icon as={RiNumber1} w={10} h={10} />}
          title={'No fees'}
          text={
            'Choose currency, provide receiving wallet and amount to exchange or pay'
          }
        />
        <Work
          icon={<Icon as={RiNumber2} w={10} h={10} />}
          text={'Transfer to your temporary BTC2USDT.com address.'}
        />
        <Work
          icon={<Icon as={RiNumber3} w={10} h={10} />}
          text={'Receive or pay coins in the chosen currency.'}
        />
      </SimpleGrid>
    </Box>
  )
}
