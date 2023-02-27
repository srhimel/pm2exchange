import { Schema, model, models } from 'mongoose'

const conversionSchema = new Schema(
  {
    currencyFrom: {
      type: Object
    },
    currencyTo: {
      type: Object
    },
    givenAmount: {
      type: Number
    },
    receiveAmount: {
      type: Number
    },
    conversionRate: {
      type: Number
    },
    walletAddress: {
      type: String
    },
    emailAddress: {
      type: String
    },
    status: {
      type: String,
      default: 'PENDING'
    },
    paymentStatus: {
      type: String,
      default: 'PENDING'
    }
  },
  {
    timestamps: true
  }
)

const Conversion = models.Conversion || model('Conversion', conversionSchema)

export default Conversion
