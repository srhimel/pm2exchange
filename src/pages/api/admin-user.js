import { createUser, validateUser } from 'server/controller/userController'
import { connectMongo } from 'server/utils/connectMongo'

export default async function ApiResponse(req, res) {
  try {
    await connectMongo()
    switch (req.method) {
      case 'POST':
        await createUser(req, res)
        break
      case 'PUT':
        await validateUser(req, res)
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
