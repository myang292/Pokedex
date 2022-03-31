const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { Pokemon, Poketype } = require('./models')
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Okayyyyy')
})

app.get('/api/pokemons', async (req, res) => {
    const allPokemons = await Pokemon.find({});
    res.send(allPokemons);
    // res.json(allpokemons)
})

app.get('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const onePokemon = await Pokemon.findById(id)
    res.json(onePokemon)
})

app.get('/api/poketypes', async (req, res) => {
        const allPokeTypes = await Poketype.find({})
        res.send(allPokeTypes)
    })

app.post('/api/poketypes', async (req, res) => {
    try {
        const addNewType = await new Poketype(req.body)
            await addNewType.save()
            return res.status(201).json({poketype})
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    })

app.get('/api/poketypes/:id', async (req, res) => {
    const { id } = req.params;
    const onePoketype = await Poketype.findById(id)
    res.json(onePoketype)
})

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})
