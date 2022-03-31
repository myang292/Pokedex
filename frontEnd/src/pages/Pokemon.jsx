import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'


const Pokemon = (props) => {
    
console.log(props)

    let {id} = useParams()

    const [selectPokemon, setPokemon] = useState('')

    useEffect(() => {
        let selectPokemon = props.pokemon.find(
            (pokemon) => pokemon._id === id
            )
            setPokemon(selectPokemon)
            console.log(setPokemon)
        }, [])
        
        
    // if(selectPokemon) {
    return(
        <div className='poketypes'>
            {/* hello */}
            {selectPokemon.num}
            <br />
            <img src = {selectPokemon.img} alt = {selectPokemon.img} style={{width:'300px'}}/>
            <br />
            {selectPokemon.name}
            <br />
            {/* {selectPokemon.type} */}
            <br />
            {selectPokemon.height}
            <br />
            {selectPokemon.weight}
            <br />
            {/* {selectPokemon.weaknesses} */}
        </div>
    )

    // }
}

export default Pokemon