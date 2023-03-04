import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import {
  FcCurrencyExchange,
  FcCollaboration,
  FcVoicemail,
  FcMoneyTransfer
} from 'react-icons/fc'

const Feature = ({ title, text, icon }) => {
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
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text textAlign={'center'} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={10}
        alignItems='stretch'>
        <Feature
          icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
          title={'No fees'}
          text={
            'What you see is what you get in our cryptocurrency exchange service. Calculating and predicting miner fees in a cryptocurrency transaction is almost impossible.'
          }
        />
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={'No registration'}
          text={
            'Fast and simple cryptocurrency exchanges do not play well with complicated user registration forms where all kinds of unnecessary information change hands, so we simply skipped that part.'
          }
        />
        <Feature
          icon={<Icon as={FcVoicemail} w={10} h={10} />}
          title={'Total anonymity'}
          text={
            'Cryptocurrencies are all about anonymity and we are all about cryptocurrencies. So in the spirit of anonymity, we will not ask you to provide any personal information in order to use our cryptocurrency exchange service.'
          }
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'Instant transfer'}
          text={
            'Instant may be a big word in the world of cryptocurrencies. We will process the cryptocurrency exchange as quickly as the network confirms your transfer.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}
