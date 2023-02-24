import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Td,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import React from 'react'
import { BsPen, BsTrash } from 'react-icons/bs'

const CurrencyListItem = ({ item, refetch, preData }) => {
  const {
    isOpen: isPopOpen,
    onOpen: popOnOpen,
    onClose: popOnClose
  } = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`/api/currency?id=${id}`).then(() => {
      refetch()
      popOnClose()
    })
  }
  const handleSubmit = (values, actions) => {
    const walletAddress = values.walletAddress
    const currency = JSON.parse(values.currency)
    axios
      .put(`/api/currency?id=${item._id}`, { walletAddress, ...currency })
      .then(() => {
        actions.setSubmitting(false)
        refetch()
        onClose()
      })
  }
  return (
    <>
      <Tr>
        <Td>
          <Image height={26} width={26} alt='' src={item.icon} />
        </Td>
        <Td>{item.label}</Td>
        <Td>{item.walletAddress}</Td>
        <Td>
          <HStack>
            <Button
              leftIcon={<BsPen />}
              colorScheme='blue'
              size={'sm'}
              onClick={onOpen}>
              Edit
            </Button>
            <Button
              leftIcon={<BsTrash />}
              colorScheme='red'
              size='sm'
              onClick={popOnOpen}>
              Delete
            </Button>
          </HStack>
        </Td>
      </Tr>

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
              <Button
                colorScheme='red'
                onClick={() => handleDelete(item._id)}
                ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {item.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{
                currency: JSON.stringify({
                  label: item.label,
                  icon: item.icon,
                  key: item.key
                }),
                walletAddress: item.walletAddress
              }}
              onSubmit={(values, actions) => handleSubmit(values, actions)}>
              {(props) => (
                <Form>
                  <Field name='currency'>
                    {({ field }) => (
                      <FormControl isRequired mb={5}>
                        <FormLabel>Select Currency</FormLabel>
                        <Select {...field} placeholder='Select option'>
                          {preData.map((currency) => (
                            <option
                              value={JSON.stringify(currency)}
                              key={currency.key}>
                              {currency.label}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='walletAddress'>
                    {({ field }) => (
                      <FormControl isRequired>
                        <FormLabel>Wallet Address</FormLabel>
                        <Input {...field} placeholder='Wallet Address' />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={props.isSubmitting}
                    type='submit'>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CurrencyListItem
