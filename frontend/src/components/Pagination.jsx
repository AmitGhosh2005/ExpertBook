function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="bg-slate-800 px-5 py-2 rounded-xl disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-lg font-semibold">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="bg-slate-800 px-5 py-2 rounded-xl disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination