import { Schema, model, models } from 'mongoose'

const apiResponseSchema = new Schema(
  {
    response: {
      type: Object
    }
  },
  {
    timestamps: true
  }
)

const ApiResponse =
  models.ApiResponse || model('ApiResponse', apiResponseSchema)

export default ApiResponse
