import {
  createApiResponse,
  getApiResponse
} from 'server/controller/apiResponseController'
import { connectMongo } from 'server/utils/connectMongo'

export default async function ApiResponse(req, res) {
  try {
    await connectMongo()
    switch (req.method) {
      case 'GET':
        await getApiResponse(req, res)
        break
      case 'POST':
        await createApiResponse(req, res)
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
