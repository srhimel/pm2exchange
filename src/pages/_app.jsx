import CoinProvider from '@/lib/provider/CoinProvider'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <CoinProvider> {getLayout(<Component {...pageProps} />)}</CoinProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
