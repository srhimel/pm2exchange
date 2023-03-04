import CoinProvider from '@/lib/provider/CoinProvider'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'
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
            <Script src='//code.jivosite.com/widget/HNH8F2UB3y' async />
          </CoinProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
