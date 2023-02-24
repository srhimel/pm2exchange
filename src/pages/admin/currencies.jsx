import Layout from '@/layout/admin/Layout'
import useCoin from '@/lib/hooks/useCoin'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Skeleton,
  SkeletonCircle,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsPlusLg, BsPen, BsTrash } from 'react-icons/bs'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'
import CurrencyListSkaleton from '@/components/admin/currencies/CurrencyListSkaleton'
import CurrencyListItem from '@/components/admin/currencies/CurrencyListItem'
import Empty from '@/components/Empty'
import axios from 'axios'
import { useMutation } from 'react-query'

const Page = () => {
  const { data, isLoading, refetch } = useCoin()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [preData, setPreData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const formattedData = []
      const response = await fetch('/currencies.json')
      const resData = await response.json()
      const allKeys = resData && Object.keys(resData.crypto)
      allKeys.forEach((key) =>
        formattedData.push({
          label: resData.crypto[key]?.name,
          icon: resData.crypto[key]?.icon_url,
          key: resData.crypto[key]?.symbol
        })
      )
      setPreData(formattedData)
    }
    fetchData()
    return () => {
      console.log('This will be logged on unmount')
    }
  }, [])

  const handleSubmit = async (values, actions) => {
    const walletAddress = values.walletAddress
    const currency = JSON.parse(values.currency)
    axios.post('/api/currency', { walletAddress, ...currency }).then(() => {
      actions.setSubmitting(false)
      refetch()
      onClose()
    })
  }
  let content
  if (isLoading)
    content = (
      <>
        <CurrencyListSkaleton />
        <CurrencyListSkaleton />
        <CurrencyListSkaleton />
        <CurrencyListSkaleton />
      </>
    )

  if (!isLoading && data.data.length)
    content = (
      <>
        {data.data.map((item) => (
          <CurrencyListItem
            key={item.key}
            item={item}
            refetch={refetch}
            preData={preData}
          />
        ))}
      </>
    )

  if (!isLoading && !data.data.length) content = <Empty />

  return (
    <>
      <Box bg='white' p={4} mb='3'>
        <Button leftIcon={<BsPlusLg />} onClick={onOpen}>
          Add New Currency
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Currency</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Formik
                initialValues={{}}
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
      </Box>
      <Box bg='white' p={4}>
        <TableContainer>
          <Table variant='striped'>
            <TableCaption placement='top' textAlign={'start'}>
              Active Currencies:
            </TableCaption>
            <Thead>
              <Tr>
                <Th w={20}>Icon</Th>
                <Th w={60}>Name</Th>
                <Th>Wallet Address</Th>
                <Th w='20' textAlign={'end'}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>{content}</Tbody>
            <Tfoot>
              <Tr>
                <Th>Icon</Th>
                <Th>Name</Th>
                <Th>Wallet Address</Th>
                <Th w='20' textAlign={'end'}>
                  Action
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Page
