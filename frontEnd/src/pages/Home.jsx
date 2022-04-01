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
    navigate(`pokemon/${pokemon._id}`)
    }


console.log(searchResults._id)



    return(
        <div>
            

            <h1>Pokedex</h1>
            <img className = 'pokedex-img' src = 'https://i.etsystatic.com/11279093/r/il/d6ac58/1799315681/il_570xN.1799315681_ii1x.jpg' alt ='https://i.etsystatic.com/11279093/r/il/d6ac58/1799315681/il_570xN.1799315681_ii1x.jpg'/>

            <br />
            <br />

            <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
            {/* <h3>Showing Results for: {searchQuery}</h3> */}
            {searchResults.map((results) => {
            return <PokeCard key={results._id} onClick={() => showPokemon(results)} img={results.img} name={results.name} type={results.type} />
    })}
        </div>
    )

}

export default Home