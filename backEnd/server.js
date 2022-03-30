const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
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

app.get('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const onePokemon = await Pokemon.findById(id)
    res.json(onePokemon)
})

app.get('/api/poketypes', async (req, res) => {
    const allpoketypes = await Poketype.find()
    res.json(allpoketypes)
})

app.get('/api/poketypes/:id', async (req, res) => {
    const { id } = req.params;
    const onePoketype = await Poketype.findById()
    res.json(onePoketype)
})


app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})
