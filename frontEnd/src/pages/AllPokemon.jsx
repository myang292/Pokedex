import React from 'react'
import { useNavigate } from 'react-router'
// import Pokemon from './components/Pokemon'

const AllPokemon = (props) => {

    // let navigate = useNavigate()

    

    // const listPokemon = (pokemon) => {
    //     navigate(`${pokemon._id}`)
    //     console.log(pokemon._id)
    // }

    return(
        <div>
            {/* {props.Pokemon.map((pokemon) => (
                <div onClick = {() => listPokemon(pokemon)} key={pokemon._id}>
                    <h3>{pokemon.name}</h3>
                    <img style={{display: 'block'}} src = {pokemon.img} alt={pokemon.num} />
                </div>
            ))} */}
            Pokemon List
        </div>
    )
}

export default AllPokemon