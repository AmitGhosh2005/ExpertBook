import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-slate-900 border-b border-slate-700 px-10 py-5 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-cyan-400">
        ExpertBook
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-cyan-400">
          Experts
        </Link>

        <Link to="/my-bookings" className="hover:text-cyan-400">
          My Bookings
        </Link>
      </div>
    </div>
  )
}

export default Navbar