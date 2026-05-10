import { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import API from '../api/axios'
import ExpertCard from '../components/ExpertCard'

function ExpertsPage() {
  const [experts, setExperts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchExperts()
  }, [search, category, page])

  const fetchExperts = async () => {
    try {
      setLoading(true)

      const res = await API.get(
        `/experts?page=${page}&search=${search}&category=${category}`
      )
      console.log(res.data)

      setExperts(res.data.experts)
      setTotalPages(res.data.totalPages)
    } catch (err) {
    console.log(err)

    setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center">
        Find Top Experts
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <ExpertCard key={expert._id} expert={expert} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default ExpertsPage