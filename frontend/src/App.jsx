import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExpertsPage from './pages/ExpertsPage'
import ExpertDetailPage from './pages/ExpertDetailPage'
import BookingPage from './pages/BookingPage'
import MyBookingsPage from './pages/MyBookingsPage'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ExpertsPage />} />
        <Route path="/experts/:id" element={<ExpertDetailPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
      </Routes>
    </div>
  )
}

export default App