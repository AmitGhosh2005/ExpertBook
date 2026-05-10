import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function ExpertCard({ expert }) {
  return (
    <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{expert.name}</h2>
          <p className="text-slate-400 mt-2">{expert.category}</p>
        </div>

        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={18} fill="yellow" />
          <span>{expert.rating}</span>
        </div>
      </div>

      <p className="mt-4 text-slate-300">
        {expert.experience} years experience
      </p>

      <Link
        to={`/experts/${expert._id}`}
        className="block mt-6 bg-cyan-500 hover:bg-cyan-600 text-center py-3 rounded-xl font-semibold"
      >
        View Details
      </Link>
    </div>
  )
}

export default ExpertCard