import axios from 'axios'
import ApiResponse from 'server/models/apiResponseModel'

export const createApiResponse = async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.coinlayer.com/live?access_key=${process.env.COINLAYER}`
    )
    const apiData = await response.data
    await ApiResponse.deleteMany()
    const newApiResponse = new ApiResponse({ response: apiData })
    const data = await newApiResponse.save()
    res.status(200).json({
      message: 'New Api Response added',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const getApiResponse = async (req, res) => {
  try {
    const data = await ApiResponse.find()
    if (!data.length) {
      res.status(200).json({
        message: 'No Data Found',
        data: []
      })
    } else {
      const apiResponse = data[0].response
      res.status(200).json(apiResponse)
    }
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}
