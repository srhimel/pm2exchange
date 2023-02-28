import Conversion from 'server/models/conversionMode'
import { connectMongo } from 'server/utils/connectMongo'

export default async function Currency(req, res) {
  try {
    await connectMongo()
    const { search } = req.query
    const data = await Conversion.find({
      $or: [{ emailAddress: search }, { walletAddress: search }]
    })

    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.json({ error: error.message })
  }
}
