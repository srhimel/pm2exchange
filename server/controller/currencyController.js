import Currency from 'server/models/currencyModel'

export const createCurrency = async (req, res) => {
  try {
    const newCurrency = new Currency(req.body)
    const data = await newCurrency.save()
    res.status(200).json({
      message: 'New Currency added',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const getCurrencies = async (req, res) => {
  try {
    const data = await Currency.find().sort({ createdAt: -1 })
    res.status(200).json({
      message: 'Found Currencies',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const deleteCurrency = async (req, res) => {
  try {
    const { id } = req.query
    await Currency.findByIdAndRemove(id)
    res.status(200).json({
      message: `Deleted Currency ${id}`
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}

export const editCurrency = async (req, res) => {
  try {
    const { id } = req.query
    const currencyInput = req.body
    const data = await Currency.findByIdAndUpdate(id, currencyInput)
    res.status(200).json({
      message: 'Edited Currency',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'There is a n error',
      error: error.message
    })
  }
}
