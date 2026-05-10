import Expert from '../models/Expert.js'
import Booking from '../models/Booking.js'

export const getExperts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1
    const limit = 6
    const skip = (page - 1) * limit

    const search = req.query.search || ''
    const category = req.query.category || ''

    const query = {
      name: {
        $regex: search,
        $options: 'i',
      },
    }

    if (category) {
      query.category = category
    }

    const experts = await Expert.find(query)
      .skip(skip)
      .limit(limit)

    const total = await Expert.countDocuments(query)

    res.json({
      experts,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch experts',
    })
  }
}

export const getExpertById = async (req, res) => {
  try {
    const expert = await Expert.findById(req.params.id)

    if (!expert) {
      return res.status(404).json({
        message: 'Expert not found',
      })
    }

    const bookings = await Booking.find({
    expertId: expert._id,

    status: {
      $in: ['Pending', 'Confirmed'],
  },
})

    const bookedSlots = bookings.map(
      (booking) => booking.timeSlot
    )

    res.json({
      ...expert._doc,
      bookedSlots,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch expert',
    })
  }
}