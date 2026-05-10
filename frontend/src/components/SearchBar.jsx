function SearchBar({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      <input
        type="text"
        placeholder="Search experts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
      >
        <option value="">All Categories</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Mentor">Mentor</option>
      </select>
    </div>
  )
}

export default SearchBar