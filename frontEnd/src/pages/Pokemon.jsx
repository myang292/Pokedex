import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import Delete from '../components/Delete'


const Pokemon = (props) => {
    
    let {id} = useParams()

    const [selectPokemon, setPokemon] = useState('')

    useEffect(() => {
        let selectPokemon = props.pokemon.find(
            (pokemon) => pokemon._id === id
            )
            setPokemon(selectPokemon)
            console.log(setPokemon)
        }, [])

    let Navigate = useNavigate()

    const deleteOne = async (id) => {
        await axios.delete(`http://localhost:3001/api/pokemons/${selectPokemon._id}`)
        Navigate('/pokemon')
        window.location.reload(true)
    }





    if (selectPokemon) {
        return(
            <div className='poketypes'>
                <br />
                <h2>N° {selectPokemon.num}</h2>
                <h3>{selectPokemon.name}</h3>
                <img src = {selectPokemon.img} alt = {selectPokemon.img} className='single-pokemon'/>
                <br />
                Type: {selectPokemon.type.join(',')}
                <br />
                Height: {selectPokemon.height}
                <br />
                Weight: {selectPokemon.weight}
                <br />
                Weakness: {selectPokemon.weaknesses.join(',')}
                <br />

                <button variant="primary" onClick={() => props.push(`/api/pokemons/${id}`)}>Edit</button>{' '}

                <Delete deleteOne={() => deleteOne(selectPokemon._id)} />
                {/* )} */}
                <br />
            </div>
        )

    } else {
        return ('Pokemon loading...')
    }
}

export default Pokemon