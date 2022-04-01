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

app.post('/api/add-pokemon', async (req, res) => {
        const addNewPokemon = await req.body
            Pokemon.insertMany(addNewPokemon)
            return res.status(201).json({Pokemon})
    })

app.get('/api/poketypes/:id', async (req, res) => {
    const { id } = req.params;
    const onePoketype = await Poketype.findById(id)
    res.json(onePoketype)
})

app.put('api/poketypes/:id', async (req, res) => {

})

app.delete('/api/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const deleteOnePokemon = await Pokemon.findById(id)
    Pokemon.deleteOne( {_id: '624616129cb0f07da3f77470' } )
    console.log(id)
})


app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})
