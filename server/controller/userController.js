import User from 'server/models/userModel'

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const data = await newUser.save()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const validateUser = async (req, res) => {
  try {
    console.log('I am getting a call')
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    if (user) {
      const sendUser = {
        name: user.name,
        userName: user.username,
        email: user.email,
        role: user.role
      }
      res.status(200).json(sendUser)
    } else {
      res.status(500).json({
        message: 'No user found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}
