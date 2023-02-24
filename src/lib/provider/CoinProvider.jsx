import { useQuery } from 'react-query'

const { createContext } = require('react')

export const CoinContext = createContext()

const CoinProvider = ({ children }) => {
  const result = useQuery({
    queryKey: ['coin-data'],
    queryFn: () =>
      fetch('https://api.minerstat.com/v2/coins')
        .then((res) => res.json())
        .then((data) => data),
    refetchOnWindowFocus: false
  })
  return <CoinContext.Provider value={result}>{children}</CoinContext.Provider>
}

export default CoinProvider
