import { io } from 'socket.io-client'

const socket = io(
  'https://expertbook-2ihn.onrender.com'
)

export default socket