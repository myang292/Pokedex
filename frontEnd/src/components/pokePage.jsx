import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const PokePage = (props) => {


    let {id} = useParams()

    const [selectedPokemon, setPokemon] = useState('')

    useEffect(() => {
        let selectedPokemon = props.pokemons.filter(
            (pokemon) => pokemon._id === (id)
        )
        setPokemon(selectedPokemon)
    }, [props.pokemons, id])

    console.log(selectedPokemon)

    return(
        <div>
            <h2>Workingggggg</h2>
            {props.name}
            <img src ={props.img} alt={props.img}/>
        </div>
    )

}

export default PokePage