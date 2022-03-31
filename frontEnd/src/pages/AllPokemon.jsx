import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
// import PokePage from '../components/PokePage'


const AllPokemon = (props) => {
    let navigate = useNavigate()
           
    const showPokemons = (pokemon) => {
        navigate(`${pokemon._id}`)
    }
    console.log(props.pokemon)

    return (
        <div className="poke-grid">
            <br />
            <br />
            <br />
            {props.pokemon.map((pokemon) => {
                return(
                <div>
                    <div className="poke-card" key={pokemon._id}>
                        <img onClick={() => showPokemons(pokemon)} style={{ display: 'block' }} src={pokemon.img} alt={pokemon.name} style={{width:'300px'}}/>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <br />
              </div>
                )
            })} 
        </div>
          
    )
}


export default AllPokemon