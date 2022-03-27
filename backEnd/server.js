const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Pokemon, Poketype } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Okayyyyy')
})

app.get('/api/pokemons', async (req, res) => {
    const allpokemons = await Pokemon.find()
    console.log('All Pokemon are here!')
    res.json(allpokemons)
})

app.get('/api/poketypes', async (req, res) => {
    const allpoketypes = await Poketype.find()
    res.json(allpoketypes)
})

app.get('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;

})

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})
