const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/pokemonDatabase')
    .then(() => {
        console.log('Connected to Mongoose!')
    })
    .catch((e) => {
        console.error('Error connecting to Mongoose', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db