const NodeGeocoder = require('node-geocoder')

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    formatter: null
}

const geocoder = NodeGeocoder(options)

module.exports = geocoder