import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import axios from 'axios'
import { useQRCode } from 'next-qrcode'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ConversionItem({ data, refetch }) {
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

  const [newStatus, setNewStatus] = useState('')

  const {
    isOpen: isPopOpen,
    onOpen: popOnOpen,
    onClose: popOnClose
  } = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

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

  const handleDelete = () => {
    axios.delete(`/api/conversion?id=${_id}`).then(() => {
      refetch(), popOnClose()
    })
  }
  const handleUpdateStatus = () => {
    axios.put(`/api/conversion?id=${_id}`, { status: newStatus }).then(() => {
      refetch(), onClose()
    })
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
          <Image src={currencyFrom?.icon} alt='' height={50} width={50} />
          <Image src={'/exchange-box-logo.png'} alt='' height={50} width={50} />
          <Image src={currencyTo?.icon} alt='' height={50} width={50} />
        </HStack>

        <Heading fontSize={'2xl'} fontFamily={'body'} mt={5} textAlign='center'>
          {currencyFrom?.label} to {currencyTo?.label}
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
            {givenAmount} {currencyFrom?.key}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Should Receive:
            </Text>{' '}
            {receiveAmount} {currencyTo?.key}
          </ListItem>
          <ListItem>
            <Text as={'span'} fontWeight={'bold'}>
              Received at:
            </Text>{' '}
            {new Date(createdAt).toDateString()}
          </ListItem>
        </List>

        <Stack align={'center'} justify={'center'} direction={'column'} mt={2}>
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
          <Text
            textAlign='center'
            fontSize={'md'}
            p={2}
            border='2px'
            borderColor={'green.600'}
            textOverflow='clip'
            wordBreak={'break-all'}
            bg={'white'}>
            {walletAddress}
          </Text>
          <Box py={4}>
            <Canvas
              text={walletAddress}
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
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            colorScheme='red'
            onClick={popOnOpen}>
            Delete
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            colorScheme='green'
            onClick={onOpen}>
            Update Status
          </Button>
        </Stack>
      </Box>
      <AlertDialog
        isOpen={isPopOpen}
        leastDestructiveRef={cancelRef}
        onClose={popOnClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Currency
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can not undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={popOnClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Status </ModalHeader>
          <ModalBody>
            <Select
              placeholder='Select Status'
              onChange={(e) => setNewStatus(e.target.value)}>
              <option value='PROCESSING'>PROCESSING</option>
              <option value='CONFIRMED'>CONFIRMED</option>
              <option value='CANCELLED'>CANCELLED</option>
            </Select>
            <Box textAlign={'end'} py={5}>
              <Button colorScheme={'green'} onClick={handleUpdateStatus}>
                Update Status
              </Button>
            </Box>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  )
}
