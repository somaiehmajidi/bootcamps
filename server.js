const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const connectDB = require('./config/db')
const colors = require('colors')

//Load env vars
dotenv.config({ path: './config/config.env'})

// connect to database
connectDB()

//Router
const bootcamps = require('./routes/bootcamps')

const PORT = process.env.PORT || 5000

const app = express()

app.use(logger)

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

// app.get('/', (req, res) => {
    // res.send('<h1>Hello form express!</h1>')
    // res.send({ name: "SOMI" })
    // res.json({ name: "SOMI" })
    // res.sendStatus(400)
    // res.status(400).json({ success: false })
    // res.status(200).json({ success: true, data: { id: 1} })
// })



const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})

