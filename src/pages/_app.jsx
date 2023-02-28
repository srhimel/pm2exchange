import CoinProvider from '@/lib/provider/CoinProvider'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <CoinProvider>
            {' '}
            {getLayout(<Component {...pageProps} />)}
          </CoinProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
