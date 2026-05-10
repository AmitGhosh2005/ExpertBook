import express from 'express'
import cors from 'cors'

import expertRoutes from './routes/expertRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: "https://expert-book-coral.vercel.app",
    credentials: true,
  })
)

app.use('/api/experts', expertRoutes)

app.use('/api/bookings', bookingRoutes)

export default app;