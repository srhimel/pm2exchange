import Currency from 'server/models/currencyModel'
import { connectMongo } from 'server/utils/connectMongo'

export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO')
    await connectMongo()
    console.log('CONNECTED TO MONGO')

    console.log('CREATING DOCUMENT')
    const test = await Currency.create({ ...req.body })
    console.log('CREATED DOCUMENT')

    res.json({ test })
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}
