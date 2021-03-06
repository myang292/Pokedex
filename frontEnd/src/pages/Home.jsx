import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'
import PokeCard from '../components/PokeCard'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = (props) => {

    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


    const searchOnChange = (e) => {
        const value = e.target.value
        setSearchQuery(value)
    }

    const searchOnSubmit = function (e) {
        const pokemon = props.pokemon
        let results = pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        })

        setSearchResults(results)
    }

    
    const showPokemons = (pokemon) => {
        navigate(`${pokemon._id}`)
    }
    let navigate = useNavigate()


    return(
        <div>
            <br />
            <br />
            <h1>Pokedex</h1>
            <img className = 'pokedex-img' src = 'https://i.etsystatic.com/11279093/r/il/d6ac58/1799315681/il_570xN.1799315681_ii1x.jpg' alt ='https://i.etsystatic.com/11279093/r/il/d6ac58/1799315681/il_570xN.1799315681_ii1x.jpg'/>
            <br />
            <br />

            <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
            <div className='pokecard-wrapper'>
                {searchResults.map((results) => {
                return (
                    <div className='search-wrapper'>
                        <PokeCard className='search-results' key={results._id} onClick={() => showPokemons(results)} img={results.img} name={results.name}/>
                    </div>
                )
                })}
            </div>
        </div>
    )

}

export default Home