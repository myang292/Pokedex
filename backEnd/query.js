const db = require('./db')
const { Pokemon, Poketype } = require('./models')

const listAllPokemons = async () => {
    const pokemons = await Pokemon.find()
    console.log( 'Pokemons: ', pokemons)
}

const listAllPoketypes = async () => {
    const poketypes = await Poketype.find()
    console.log( 'Types: ', poketypes)
}

const run = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}