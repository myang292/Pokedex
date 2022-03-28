import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Pokemon from './components/Pokemon'

const Pokemon = (props) => {

    let { id } = useParams()

    const [selectedPokemon, setPokemon] = useState('')

    useEffect(() => {
        let selectedPokemon = props.Pokemon.find(
            (pokemon) => pokemon._id === id
        )
        setPokemon(selectedPokemon)
    }, [props.Pokemon, id])

    // console.log(selectedPokemon)


    if (selectedPokemon) {
    return(
        <div>
            <Pokemon />
            <h4>{selectedPokemon.num}</h4>
            <h3>{selectedPokemon.name}</h3>
        </div>
    )
    } else {
        return(
            <div>
                <p>uhhhhh not working???</p>
            </div>
        )
    }
}

export default Pokemon