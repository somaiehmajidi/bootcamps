const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// load models
const Bootcamp = require('./models/Bootcamp');

// connect to db
mongoose.connect(process.env.MONGO_URI)

// read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// Import into DB
const importData = async () => {
    try{
        await Bootcamp.create(bootcamps)
        console.log('Data imported...'.green.inverse)
        process.exit()
    } catch(err) {
        console.log(err.red)
    }
}

const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()
        console.log('Data deleted...'.red.inverse)
        process.exit()
    } catch(err) {
        console.log(err.red)
    }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
