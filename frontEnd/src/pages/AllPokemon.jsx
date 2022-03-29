import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
// import Pokemon from './components/Pokemon'

const AllPokemon = (props) => {

    const getPokemon = async() => {
        const pokeList = await axios.get('http://localhost:3001/api/pokemons')
        setPokemons(pokeList.data)
    }
    // console.log(getPokemon)

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemon()
    })

    // console.log(getPokemon)

    return(
        <div>
            Hello
        </div>
    )
}

export default AllPokemon