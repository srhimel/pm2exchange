import { useContext } from 'react'
import { CoinContext } from '../provider/CoinProvider'

const useCoin = () => {
  return useContext(CoinContext)
}

export default useCoin
