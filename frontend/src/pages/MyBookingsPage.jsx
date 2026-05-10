import { useState } from 'react'
import API from '../api/axios'
import toast from 'react-hot-toast'

function MyBookingsPage() {
  const [email, setEmail] = useState('')
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchBookings = async () => {
    if (!email) {
      toast.error('Please enter email')
      return
    }

    try {
      setLoading(true)

      const res = await API.get(
        `/bookings?email=${email}`
      )

      setBookings(res.data)
    } catch (err) {
      toast.error('Failed to fetch bookings')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await API.patch(
        `/bookings/${id}/status`,
        {
          status,
        }
      )

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id
            ? { ...booking, status }
            : booking
        )
      )

      toast.success('Status updated')
    } catch (err) {
      toast.error('Failed to update status')
    }
  }

  const getStatusStyle = (status) => {
    if (status === 'Pending') {
      return 'bg-yellow-500/20 text-yellow-300'
    }

    if (status === 'Confirmed') {
      return 'bg-green-500/20 text-green-300'
    }

    return 'bg-cyan-500/20 text-cyan-300'
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      
      <h1 className="text-5xl font-bold text-center mb-10">
        My Bookings
      </h1>

      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">
        
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={fetchBookings}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {bookings.length === 0 && !loading && (
          <div className="text-center text-slate-400 py-10">
            No bookings found
          </div>
        )}

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                
                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    {booking.name}
                  </h2>

                  <div className="space-y-2 text-slate-300">
                    <p>Email: {booking.email}</p>
                    <p>Phone: {booking.phone}</p>
                    <p>Date: {booking.date}</p>
                    <p>Slot: {booking.timeSlot}</p>

                    {booking.notes && (
                      <p>
                        Notes: {booking.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-start lg:items-end">

                  <span
                    className={`px-5 py-2 rounded-xl font-semibold ${getStatusStyle(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>

                  <select
                    value={booking.status}
                    onChange={(e) =>
                      updateStatus(
                        booking._id,
                        e.target.value
                      )
                    }
                    className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 outline-none"
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Completed">
                      Completed
                    </option>
                  </select>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MyBookingsPage