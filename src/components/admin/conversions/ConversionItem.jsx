import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  HStack,
  List,
  ListItem
} from '@chakra-ui/react'
import { useQRCode } from 'next-qrcode'
import Image from 'next/image'

export default function ConversionItem({ data }) {
  const {
    currencyFrom,
    currencyTo,
    givenAmount,
    receiveAmount,
    walletAddress,
    emailAddress,
    conversionRate,
    createdAt,
    status
  } = data

  const getStatusColor = (status, type) => {
    if (status === 'PENDING' && type === 'light') {
      return 'yellow.100'
    }
    if (status === 'PENDING' && type === 'dark') {
      return 'yellow.500'
    } else if (status === 'PROCESSING' && type === 'light') {
      return 'blue.100'
    } else if (status === 'PROCESSING' && type === 'dark') {
      return 'blue.500'
    } else if (status === 'CONFIRMED' && type === 'light') {
      return 'green.100'
    } else if (status === 'CONFIRMED' && type === 'dark') {
      return 'green.500'
    } else if (status === 'CANCELLED' && type === 'light') {
      return 'red.100'
    } else if (status === 'CANCELLED' && type === 'dark') {
      return 'red.500'
    } else {
      return 'white'
    }
  }
  const { Canvas } = useQRCode()
  return (
    <Box w={'full'} bg={getStatusColor(status, 'light')} boxShadow={'xl'} p={6}>
      <HStack justify={'center'} gap={5}>
        <Image
          src={'https://assets.coinlayer.com/icons/611.png'}
          alt=''
          height={50}
          width={50}
        />
        <Image src={'/exchange-box-logo.png'} alt='' height={50} width={50} />
        <Image
          src={'https://assets.coinlayer.com/icons/ABC.png'}
          alt=''
          height={50}
          width={50}
        />
      </HStack>

      <Heading fontSize={'2xl'} fontFamily={'body'} mt={5} textAlign='center'>
        Bitcoin to Etherum
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4} textAlign='center'>
        himusr@gmail.com
      </Text>
      <List spacing={2}>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Rate:
          </Text>{' '}
          20.55454
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Given:
          </Text>{' '}
          454545454 ETH
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Should Receive:
          </Text>{' '}
          454545454 ETH
        </ListItem>
        <ListItem>
          <Text as={'span'} fontWeight={'bold'}>
            Received at:
          </Text>{' '}
          30 minutes ago
        </ListItem>
      </List>

      <Stack align={'center'} justify={'center'} direction={'column'} mt={2}>
        <Text
          textAlign='center'
          fontSize={'md'}
          p={2}
          color='white'
          textOverflow='clip'
          wordBreak={'break-all'}
          bg={getStatusColor(status, 'dark')}
          w={'full'}>
          {status}
        </Text>
        <Text
          textAlign='center'
          fontSize={'md'}
          p={2}
          border='2px'
          borderColor={'green.600'}
          textOverflow='clip'
          wordBreak={'break-all'}
          bg={'white'}>
          0xf6d3e2a6ad525fea8ad8ae0b3c5608143aa332e2
        </Text>
        <Box py={4}>
          <Canvas
            text={'0xf6d3e2a6ad525fea8ad8ae0b3c5608143aa332e2'}
            options={{
              level: 'M',
              margin: 0,
              scale: 2,
              width: 150,
              color: {
                dark: '#000',
                light: '#FFF'
              }
            }}
          />
        </Box>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Button flex={1} fontSize={'sm'} rounded={'full'} colorScheme='red'>
          Delete
        </Button>
        <Button flex={1} fontSize={'sm'} rounded={'full'} colorScheme='green'>
          Update Status
        </Button>
      </Stack>
    </Box>
  )
}
