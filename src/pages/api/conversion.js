import {
  createConversion,
  deleteConversion,
  editConversion,
  getConversion
} from 'server/controller/conversionController'
import { connectMongo } from 'server/utils/connectMongo'

export default async function Currency(req, res) {
  try {
    await connectMongo()
    switch (req.method) {
      case 'GET':
        await getConversion(req, res)
        break
      case 'POST':
        await createConversion(req, res)
        break
      case 'PUT':
        await editConversion(req, res)
        break
      case 'DELETE':
        await deleteConversion(req, res)
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
