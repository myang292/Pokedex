import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
// import PokePage from '../components/PokePage'
import Footer from '../components/Footer'


const AllPokemon = (props) => {
    let navigate = useNavigate()
           
    const showPokemons = (pokemon) => {
        navigate(`${pokemon._id}`)
    }
    console.log(props.pokemon)

    return (
        <div>
            <br />
            <br />
            <h2>Pokemon</h2>
            <div id='wrapper'>
                {props.pokemon.map((pokemon) => {
                    return(
                        <div id="poke-card" key={pokemon._id} onClick={() => showPokemons(pokemon)}>
                            <div id='pokemon-image'> 
                                <img id='poke-image' src={pokemon.img} alt={pokemon.name}/>
                            </div>
                            <div id='pokemon-name'>
                                <h4>{pokemon.name}</h4>
                            </div>

                        </div>
                    )
                })} 
            </div>
        </div>
    )
}


export default AllPokemon