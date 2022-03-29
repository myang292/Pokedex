import React from 'react'
import { useNavigate } from 'react-router-dom'


const PokePage = (props) => {

    let navigate = useNavigate()
  
    const showPokemons = (pokemons) => {
      navigate(`${pokemons._id}`)
      console.log(props.pokemon)
    }


    return( 
        <div>
            {props.pokemons?.map((pokemon) => (
                <div>
                    <h4>{pokemon.num}</h4>
                    {/* <h3>{pokemon.name}</h3>
                    <img src = {pokemon.img} alt={pokemon.img}/>
                    <p>
                        {pokemon.height}
                        {pokemon.weight}
                        {pokemon.weakness}
                    </p> */}
                </div>
            ))}
        </div>
    )
}

export default PokePage