function ErrorMessage({ message }) {
  return (
    <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl mt-5">
      {message}
    </div>
  )
}

export default ErrorMessage