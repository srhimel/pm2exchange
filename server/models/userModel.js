import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    role: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const User = models.User || model('User', userSchema)

export default User
