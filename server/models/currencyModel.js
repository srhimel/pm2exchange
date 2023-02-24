import { Schema, model, models } from 'mongoose'

const currencySchema = new Schema({
  label: {
    type: String
  },
  key: {
    type: String
  },
  icon: {
    type: String
  },
  walletAddress: {
    type: String
  }
})

const Currency = models.Currency || model('Currency', currencySchema)

export default Currency
