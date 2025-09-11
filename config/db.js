const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.underline)
}

module.exports = connectDB

// password bug in uri -> instead of @ must add %40 - do not use '@' in database password