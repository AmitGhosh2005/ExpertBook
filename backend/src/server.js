import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
import { Server } from 'socket.io'

import {connectDB} from './config/db.js'
import app from './index.js'

connectDB()

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
})

app.use((req, res, next) => {
  req.io = io
  next()
})

io.on('connection', (socket) => {
  console.log('User connected')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})