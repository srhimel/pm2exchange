import {
  createCurrency,
  deleteCurrency,
  editCurrency,
  getCurrencies
} from 'server/controller/currencyController'
import { connectMongo } from 'server/utils/connectMongo'

export default async function Currency(req, res) {
  try {
    await connectMongo()
    switch (req.method) {
      case 'GET':
        await getCurrencies(req, res)
        break
      case 'POST':
        await createCurrency(req, res)
        break
      case 'PUT':
        await editCurrency(req, res)
        break
      case 'DELETE':
        await deleteCurrency(req, res)
        break
      default:
        res.status(200).json({
          message: 'API is working'
        })
        break
    }
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
