import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/search'
import Pokemon from './Pokemon'

const Home = (props) => {

    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const searchOnChange = (e) => {
        const value = e.target.value
        console.log(value)
        setSearchQuery(value)
    }

    const searchOnSubmit = function (e) {
        const pokemon = props.pokemon
        let results = pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        console.log(results)

        setSearchResults(results)
    }

    let navigate = useNavigate()

    const showPokemon = (pokemon) => {
    navigate(`pokemon/${pokemon.num}`)
    }

    return(
        <div>
            <h1>Pokedex</h1>
            <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
            <h3>Showing Results for: {searchQuery}</h3>
            {searchResults.map((result) => {
            return <Pokemon key={result._id} onClick={() => showPokemon(result)} image={result.img} name={result.name} />
    })}
        </div>
    )

}

export default Home