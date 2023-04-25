const { Schema, model, models } = require('mongoose')
const schedule = require('node-schedule')
const mongoose = require('mongoose')
const fs = require('fs')

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
const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI)
}

exports.rateMaker = schedule.scheduleJob('0 0 */1 * * *', async () => {
  try {
    await connectMongo()
    const data = await Conversion.find()
    const formattedData = data.map((i) => {
      return `<item>
        <form>${data?.currencyFrom?.key}</form>
        <to>${data?.currencyTo?.key}</to>
        <in>${1}</in>
        <out>${data?.givenAmount}</out>
        <amount>${data?.receiveAmount}</amount>
        <minamount>${0.0001}</minamount>
        <maxamount>${10000}</maxamount>
      </item>`
    })
    fs.writeFile('rates.xml', `<rates> ${formattedData} </rates>`, (err) => {
      if (err) throw err
      console.log('The file has been saved!')
    })
  } catch (error) {
    console.log({
      message: 'There is an error from scheduler',
      error: error
    })
  }
})
