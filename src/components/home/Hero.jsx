/* eslint-disable react/no-children-prop */
import Explain from '@/components/home/Explain'
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
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const items = [
  {
    label: 'Bitcoin',
    key: 'BTC',
    icon: '/coins/btc.png'
  },
  {
    label: 'Ethereum',
    key: 'ETH',
    icon: '/coins/eth.png'
  },
  {
    label: 'Monero',
    key: 'XMR',
    icon: '/coins/xmr.png'
  },
  {
    label: 'Litecoin',
    key: 'LTC',
    icon: '/coins/ltc.png'
  }
]

export default function Hero() {
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
          <CurrencyForm />
        </Stack>
      </Container>
      <Explain />
    </Box>
  )
}

export const CurrencyForm = () => {
  const [currencyOne, setCurrencyOne] = useState('')
  const [currencyTwo, setCurrencyTwo] = useState('')
  const [givenAmount, setGivenAmount] = useState(0)
  const [receiveAmount, setReceiveAmount] = useState(0)
  const [walletAddress, setWalletAddress] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [conversionRate, setConversionRate] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./rates.json')
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
    return () => {
      console.log('This will be logged on unmount')
    }
  }, [])

  const getCurrencyIcon = (key) => {
    const item = items.find((i) => i.key === key)
    return item?.icon
  }

  const getReceiveAmount = useCallback(
    (amount, currOne, currTwo) => {
      setGivenAmount(amount)
      const inCurr = data.rates[currOne]
      const outCurr = data.rates[currTwo]
      const rate = (inCurr / outCurr).toFixed(8)
      setConversionRate(rate)
      setReceiveAmount(rate * amount)
    },
    [data.rates]
  )

  const getCurrencyName = (key) => {
    const item = items.find((i) => i.key === key)
    return item?.label
  }

  const getConversionRate = (currOne, currTwo) => {
    const inCurr = data.rates[currOne]
    const outCurr = data.rates[currTwo]
    return (inCurr / outCurr).toFixed(8)
  }

  const handleFormSubmit = () => {
    console.log({
      currencyOne,
      currencyTwo,
      givenAmount,
      receiveAmount,
      walletAddress,
      emailAddress,
      conversionRate
    })
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
              onChange={(e) => setCurrencyOne(e.target.value)}>
              {items.map((item) => (
                <option value={item.key} key={item.key}>
                  {item.label}
                </option>
              ))}
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
              onChange={(e) => setCurrencyTwo(e.target.value)}>
              {items.map((item) => (
                <option value={item.key} key={item.key}>
                  {item.label}
                </option>
              ))}
            </Select>
          </InputGroup>
        </Box>
      </Stack>
      {currencyOne && currencyTwo ? (
        <>
          <HStack gap={5} justify='center' mt={5} mb={3}>
            <Image
              src={getCurrencyIcon(currencyOne)}
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
              src={getCurrencyIcon(currencyTwo)}
              height={50}
              width={50}
              alt=''
            />
          </HStack>
          <Box>
            <Text color={'gray.600'}>
              1 {getCurrencyName(currencyOne)} ={' '}
              {getConversionRate(currencyOne, currencyTwo)}{' '}
              {getCurrencyName(currencyTwo)}
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
                getReceiveAmount(amount, currencyOne, currencyTwo)
              }
              w='full'>
              <NumberInputField
                placeholder={`${getCurrencyName(currencyOne)} to exchange`}
              />
            </NumberInput>
            {receiveAmount === 0 ? (
              <>
                <Input
                  size={'lg'}
                  placeholder={`${getCurrencyName(currencyTwo)} to receive`}
                />
              </>
            ) : (
              <>
                <NumberInput value={receiveAmount} size={'lg'} w='full'>
                  <NumberInputField
                    placeholder={`${getCurrencyName(currencyTwo)} to receive`}
                  />
                </NumberInput>
              </>
            )}
          </Stack>
          <Input
            my='4'
            size={'lg'}
            placeholder={`Enter your ${getCurrencyName(
              currencyTwo
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
        onClick={handleFormSubmit}>
        Start Exchange
      </Button>
    </Box>
  )
}
