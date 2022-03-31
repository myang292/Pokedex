import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'
import PokeCard from '../components/PokeCard'
import Nav from '../components/Nav'

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
        let results = pokemon.find((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        console.log(results)

        setSearchResults(results)
    }

    let navigate = useNavigate()

    const showPokemon = (pokemon) => {
    navigate(`pokemon/${pokemon._id}`)
    }
console.log(props.type)
    return(
        <div>
            

            <br />

            <h1>List of Pokemon</h1>

            <br />

            <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
            <h3>Showing Results for: {searchQuery}</h3>
            {searchResults.map((results) => {
            return <PokeCard key={results._id} onClick={() => showPokemon(results)} num={results.num} img={results.img} name={results.name} type={results.type}
            />
    })}
        </div>
    )

}

export default Home