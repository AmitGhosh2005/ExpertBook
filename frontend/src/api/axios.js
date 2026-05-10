import axios from 'axios'

const API = axios.create({
  baseURL: 'https://expertbook-2ihn.onrender.com/api',
})

export default API