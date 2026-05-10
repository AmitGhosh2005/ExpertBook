import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api/axios'
import socket from '../socket/socket'
import SlotCard from '../components/SlotCard'
import LoadingSpinner from '../components/LoadingSpinner'

function ExpertDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [expert, setExpert] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookedSlots, setBookedSlots] = useState([])

  useEffect(() => {
    fetchExpert()

    socket.on('slotBooked', (data) => {
      if (data.expertId === id) {
        setBookedSlots((prev) => [...prev, data.timeSlot])
      }
    })

    return () => {
      socket.off('slotBooked')
    }
  }, [])

  const fetchExpert = async () => {
    try {
      const res = await API.get(`/experts/${id}`)

      setExpert(res.data)
      setBookedSlots(res.data.bookedSlots || [])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700">
        
        <h1 className="text-5xl font-bold">
          {expert.name}
        </h1>

        <p className="mt-4 text-cyan-400 text-xl">
          {expert.category}
        </p>

        <div className="flex items-center gap-6 mt-4">
          <p className="text-yellow-400 font-semibold">
            ⭐ {expert.rating}
          </p>

          <p className="text-slate-300">
            {expert.experience} Years Experience
          </p>
        </div>

        <p className="mt-6 text-slate-300 leading-8">
          {expert.bio}
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Available Slots
          </h2>

          {expert.availableSlots.map((day) => (
            <div
              key={day.date}
              className="mb-10 bg-slate-900 p-6 rounded-2xl border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {day.date}
              </h3>

              <div className="flex flex-wrap gap-4">
                {day.slots.map((slot) => (
                  <SlotCard
                    key={slot}
                    slot={slot}
                    booked={bookedSlots.includes(slot)}
                    onClick={() =>
                      navigate(`/booking/${id}`, {
                        state: {
                          expert,
                          date: day.date,
                          slot,
                        },
                      })
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExpertDetailPage