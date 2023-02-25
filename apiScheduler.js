const { default: axios } = require('axios')
const { Schema, model, models } = require('mongoose')
const schedule = require('node-schedule')

const apiResponseSchema = new Schema({
  response: {
    type: Object
  }
})

const ApiResponse =
  models.ApiResponse || model('ApiResponse', apiResponseSchema)

exports.apiScheduler = schedule.scheduleJob('0 */8 * * *', async () => {
  try {
    const response = await axios.get(
      `http://api.coinlayer.com/live?access_key=${process.env.COINLAYER}`
    )
    const apiData = await response.data
    await ApiResponse.deleteMany()
    const newApiResponse = new ApiResponse({ response: apiData })
    newApiResponse.save()
    console.log('New Api Added')
  } catch (error) {
    console.log({
      message: 'There is an error from scheduler',
      error: error
    })
  }
})
