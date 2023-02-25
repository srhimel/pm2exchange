import { Schema, model, models } from 'mongoose'

const apiResponseSchema = new Schema({
  response: {
    type: Object
  }
})

const ApiResponse =
  models.ApiResponse || model('ApiResponse', apiResponseSchema)

export default ApiResponse
