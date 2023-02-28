import {
  Box,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useQRCode } from 'next-qrcode'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ResultItem({ data }) {
  const {
    _id,
    currencyFrom,
    currencyTo,
    givenAmount,
    receiveAmount,
    walletAddress,
    emailAddress,
    conversionRate,
    createdAt,
    paymentStatus,
    status
  } = data || {}

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
    <>
      <Box
        w={'full'}
        bg={getStatusColor(status, 'light')}
        boxShadow={'xl'}
        p={6}>
        <HStack justify={'center'} gap={5}>
          <Image src={currencyFrom.icon} alt='' height={50} width={50} />
          <Image src={'/exchange-box-logo.png'} alt='' height={50} width={50} />
          <Image src={currencyTo.icon} alt='' height={50} width={50} />
        </HStack>

        <Heading fontSize={'2xl'} fontFamily={'body'} mt={5} textAlign='center'>
          {currencyFrom.label} to {currencyTo.label}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4} textAlign='center'>
          {emailAddress}
        </Text>

        <List spacing={2}>
          <ListItem
            bg={paymentStatus === 'PENDING' ? 'red.500' : 'transparent'}
            color={paymentStatus === 'PENDING' ? 'white' : 'green'}>
            <Text as={'span'} fontWeight={'bold'}>
              Payment Status:
            </Text>{' '}
            <span>{paymentStatus}</span>
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Rate:
            </Text>{' '}
            {conversionRate}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Given:
            </Text>{' '}
            {givenAmount} {currencyFrom.key}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Should Receive:
            </Text>{' '}
            {receiveAmount} {currencyTo.key}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Your Address:
            </Text>{' '}
            {walletAddress}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Deposit Address:
            </Text>{' '}
            {currencyFrom.walletAddress}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Received at:
            </Text>{' '}
            {new Date(createdAt).toDateString()}
          </ListItem>
        </List>
        <Text
          textAlign='center'
          fontSize={'md'}
          p={1}
          color='white'
          textOverflow='clip'
          wordBreak={'break-all'}
          bg={getStatusColor(status, 'dark')}
          w={'full'}>
          {status}
        </Text>

        {/* <Box textAlign={'center'} mt={5}>
          <Button colorScheme={'green'} w='full'>
            View Details
          </Button>
        </Box> */}
      </Box>
    </>
  )
}
