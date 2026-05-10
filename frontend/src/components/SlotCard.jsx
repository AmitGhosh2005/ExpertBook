function SlotCard({ slot, booked, onClick }) {
  return (
    <button
      disabled={booked}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium transition-all
      ${
        booked
          ? 'bg-red-500/20 text-red-400 cursor-not-allowed'
          : 'bg-cyan-500 hover:bg-cyan-600'
      }`}
    >
      {slot}
    </button>
  )
}

export default SlotCard