import Booking from '../models/Booking.js'

export const createBooking = async (req, res) => {
  try {
    const {
      expertId,
      name,
      email,
      phone,
      date,
      timeSlot,
      notes,
    } = req.body

    if (
      !expertId ||
      !name ||
      !email ||
      !phone ||
      !date ||
      !timeSlot
    ) {
      return res.status(400).json({
        message: 'All fields are required',
      })
    }

    const booking = await Booking.create({
      expertId,
      name,
      email,
      phone,
      date,
      timeSlot,
      notes,
    })

    if (req.io) {
    req.io.emit('slotBooked', {
    expertId,
    date,
    timeSlot,
  })
}

    res.status(201).json(booking)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Slot already booked',
      })
    }

    res.status(500).json({
      message: 'Booking failed',
    })
  }
}

export const getBookings = async (req, res) => {
  try {
    const email = req.query.email

    const bookings = await Booking.find({
      email,
    }).sort({ createdAt: -1 })

    res.json(bookings)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch bookings',
    })
  }
}

export const updateBookingStatus = async (
  req,
  res
) => {
  try {
    const booking = await Booking.findById(
      req.params.id
    )

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found',
      })
    }

    booking.status = req.body.status

    await booking.save()

    res.json(booking)
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update booking',
    })
  }
}