/* eslint-disable react/no-children-prop */
import Explain from '@/components/home/Explain'
import useCoin from '@/lib/hooks/useCoin'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  HStack,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function Hero({ data, isLoading }) {
  const { data: items } = useCoin()
  console.log({ data, items })
  return (
    <Box
      bgImage={'./shape.svg'}
      bgRepeat='no-repeat'
      bgPosition={'bottom'}
      bgSize='cover'
      bgColor={useColorModeValue('green.100')}
      pt={{ base: 20, md: 36 }}
      pb={{ base: 28, md: 44 }}>
      <Container maxW={'4xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
            Instant, Easy and Secure <br />
            <Text as={'span'} color={'green.500'}>
              Crypto Coin Exchange
            </Text>
          </Heading>
          <Text color={'green.900'} fontSize='xl' mt={'25px !important'}>
            Instant exchanges, make your exchange or payment now
          </Text>
          <CurrencyForm items={items} data={data} />
        </Stack>
      </Container>
      <Explain />
    </Box>
  )
}

export const CurrencyForm = ({ items, data }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [currencyOneKey, setCurrencyOneKey] = useState('')
  const [currencyOne, setCurrencyOne] = useState('')
  const [currencyTwoKey, setCurrencyTwoKey] = useState('')
  const [currencyTwo, setCurrencyTwo] = useState('')
  const [givenAmount, setGivenAmount] = useState(0)
  const [receiveAmount, setReceiveAmount] = useState(0)
  const [walletAddress, setWalletAddress] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [conversionRate, setConversionRate] = useState(0)

  const getCurrencyIcon = (key) => {
    const item = items.find((i) => i.key === key)
    return item?.icon
  }

  const getReceiveAmount = useCallback(
    (amount, currOne, currTwo) => {
      setGivenAmount(amount)
      const inCurr = data?.rates[currOne]
      const outCurr = data?.rates[currTwo]
      const rate = (inCurr / outCurr).toFixed(8)
      setConversionRate(rate)
      setReceiveAmount(rate * amount)
    },
    [data?.rates]
  )

  const getCurrencyName = (key) => {
    const item = items.find((i) => i.key === key)
    return item?.label
  }

  const getConversionRate = (currOne, currTwo) => {
    const inCurr = data?.rates[currOne]
    const outCurr = data?.rates[currTwo]
    return (inCurr / outCurr).toFixed(8)
  }
  const handleCurrencyTwoChange = (e) => {
    const currTwo = JSON.parse(e.target.value)
    const currTwoKey = currTwo.key
    setCurrencyTwoKey(currTwoKey)
    setCurrencyTwo(currTwo)
    if (currencyOneKey && givenAmount) {
      const rate = getConversionRate(currencyOneKey, currTwoKey)
      setReceiveAmount(rate * givenAmount)
    }
  }

  const handleCurrencyOneChange = (e) => {
    const currOne = JSON.parse(e.target.value)
    const currOneKey = currOne.key
    setCurrencyOneKey(currOneKey)
    setCurrencyOne(currOne)
    if (currencyTwoKey && givenAmount) {
      const rate = getConversionRate(currOneKey, currencyTwoKey)
      setReceiveAmount(rate * givenAmount)
    }
  }

  const handleFormSubmit = () => {
    setLoading(true)
    axios
      .post('/api/conversion', {
        currencyFrom: currencyOne,
        currencyTo: currencyTwo,
        givenAmount,
        receiveAmount,
        walletAddress,
        emailAddress,
        conversionRate
      })
      .then((res) => router.push(`/step-2?id=${res.data._id}`))
      .finally(() => setLoading(false))
  }

  return (
    <Box bg={'whiteAlpha.800'} p={4} rounded='xl' boxShadow={'sm'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '16px', md: '24px' }}
        align={'center'}>
        <Box w='full'>
          <InputGroup size={'lg'}>
            <InputLeftAddon children='From' bg={'gray.50'} w={20} />
            <Select
              placeholder='Select option'
              roundedBottomEnd={5}
              roundedTopEnd={5}
              roundedTopStart={0}
              roundedBottomStart={0}
              onChange={(e) => handleCurrencyOneChange(e)}>
              {items?.length
                ? items.map((item) => (
                    <option value={JSON.stringify(item)} key={item.key}>
                      {item.label} - {item.key}
                    </option>
                  ))
                : ''}
            </Select>
          </InputGroup>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }}>
          <ChevronRightIcon w={8} h={8} color={'green.500'} />
        </Box>
        <Box w='full'>
          <InputGroup size={'lg'}>
            <InputLeftAddon children='To' bg={'gray.50'} w={20} />
            <Select
              placeholder='Select option'
              roundedBottomEnd={5}
              roundedTopEnd={5}
              roundedTopStart={0}
              roundedBottomStart={0}
              onChange={(e) => handleCurrencyTwoChange(e)}>
              {items?.length
                ? items.map((item) => (
                    <option value={JSON.stringify(item)} key={item.key}>
                      {item.label} - {item.key}
                    </option>
                  ))
                : ''}
            </Select>
          </InputGroup>
        </Box>
      </Stack>
      {currencyOneKey && currencyTwoKey ? (
        <>
          <HStack gap={5} justify='center' mt={5} mb={3}>
            <Image
              src={getCurrencyIcon(currencyOneKey)}
              height={50}
              width={50}
              alt=''
            />
            <Image
              src={'/exchange-box-logo.png'}
              height={50}
              width={50}
              alt=''
            />
            <Image
              src={getCurrencyIcon(currencyTwoKey)}
              height={50}
              width={50}
              alt=''
            />
          </HStack>
          <Box>
            <Text color={'gray.600'}>
              1 {getCurrencyName(currencyOneKey)} ={' '}
              {getConversionRate(currencyOneKey, currencyTwoKey)}{' '}
              {getCurrencyName(currencyTwoKey)}
            </Text>
          </Box>
          <Stack
            mt='5'
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '16px', md: '24px' }}
            align={'center'}>
            <NumberInput
              size={'lg'}
              onChange={(amount) =>
                getReceiveAmount(amount, currencyOneKey, currencyTwoKey)
              }
              w='full'>
              <NumberInputField
                placeholder={`${getCurrencyName(currencyOneKey)} to exchange`}
              />
            </NumberInput>
            {receiveAmount === 0 ? (
              <>
                <Input
                  size={'lg'}
                  placeholder={`${getCurrencyName(currencyTwoKey)} to receive`}
                />
              </>
            ) : (
              <>
                <NumberInput value={receiveAmount} size={'lg'} w='full'>
                  <NumberInputField
                    placeholder={`${getCurrencyName(
                      currencyTwoKey
                    )} to receive`}
                  />
                </NumberInput>
              </>
            )}
          </Stack>
          <Input
            my='4'
            size={'lg'}
            placeholder={`Enter your ${getCurrencyName(
              currencyTwoKey
            )} wallet address`}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <Input
            size={'lg'}
            placeholder={`Enter your email address (Optional)`}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}

      <Button
        colorScheme='green'
        w={'full'}
        mt={5}
        size='lg'
        onClick={handleFormSubmit}
        isLoading={loading}>
        Start Exchange
      </Button>
    </Box>
  )
}
