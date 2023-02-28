import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SimpleCard() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleLogin = async () => {
    setLoading(true)
    const res = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/admin/dashboard`
    })
    if (res?.error) {
      setError('Username and email does not match')
    } else {
      setError(null)
    }
    setLoading(false)
    if (res.url) {
      setError(null)
      router.push(res.url)
    }
  }
  console.log(error)
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
              </Stack>
              {error ? (
                <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Email or password is incorrect!</AlertTitle>
                </Alert>
              ) : (
                <></>
              )}

              <Button
                colorScheme={'green'}
                onClick={handleLogin}
                isLoading={loading}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
