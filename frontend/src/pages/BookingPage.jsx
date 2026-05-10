import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import API from '../api/axios'
import toast from 'react-hot-toast'

function BookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill all required fields')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email')
      return false
    }

    if (formData.phone.length < 10) {
      toast.error('Invalid phone number')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      setLoading(true)

      await API.post('/bookings', {
        expertId: id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
        date: state.date,
        timeSlot: state.slot,
      })

      toast.success('Booking successful')

      navigate('/my-bookings')
    } catch (err) {
      toast.error(
        err.response?.data?.message || 'Booking failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-10">
        
        <h1 className="text-4xl font-bold mb-8">
          Book Session
        </h1>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 mb-10">
          
          <h2 className="text-2xl font-bold">
            {state.expert.name}
          </h2>

          <div className="mt-4 space-y-2 text-slate-300">
            <p>Category: {state.expert.category}</p>
            <p>Date: {state.date}</p>
            <p>Slot: {state.slot}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 outline-none focus:border-cyan-400"
          ></textarea>

          <button
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold text-lg disabled:opacity-50"
          >
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingPage