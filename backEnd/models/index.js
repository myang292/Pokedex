const { model } = require('mongoose')
const PokemonSchema = requre('./pokemon')
const PoketypeSchema = require('./poketype')

const Pokemon = model('pokemons', PokemonSchema)
const Poketype = model('poketypes', PoketypeSchema)

module.exports = {
    Pokemon,
    Poketype
}