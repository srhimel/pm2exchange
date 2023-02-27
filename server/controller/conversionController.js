import Conversion from 'server/models/conversionMode'
import Currency from 'server/models/currencyModel'

export const createConversion = async (req, res) => {
  try {
    const newConversion = new Conversion(req.body)
    const data = await newConversion.save()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const getConversion = async (req, res) => {
  try {
    const { id } = req.query || {}
    let data
    if (id) {
      data = await Conversion.findById(id)
    } else {
      data = await Conversion.find().sort({ createdAt: -1 })
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const deleteConversion = async (req, res) => {
  try {
    const { id } = req.query
    await Conversion.findByIdAndRemove(id)
    res.status(200).json({
      message: `Deleted Conversion ${id}`
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const editConversion = async (req, res) => {
  try {
    const { id } = req.query
    const ConversionInput = req.body
    const data = await Conversion.findByIdAndUpdate(id, ConversionInput)
    res.status(200).json({
      message: 'Edited Conversion',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}
