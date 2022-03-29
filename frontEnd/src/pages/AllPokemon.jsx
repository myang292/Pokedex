import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import PokePage from '../components/PokePage'
// import Pokemon from './components/Pokemon'

// const [pokemons, setPokemons] = useState([])

const AllPokemon = (props) => {

//     const getPokemon = async() => {
//         const pokeList = await axios.get('http://localhost:3001/api/pokemons')
//         setPokemons(pokeList.data)
//     }
//     // console.log(getPokemon)


//     useEffect(() => {
//         getPokemon()
//     })

    // console.log(getPokemon)

    return(
        <div>
            heyyyyy
            < PokePage />
        </div>
    )
}

export default AllPokemon