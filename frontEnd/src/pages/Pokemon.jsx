import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'

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


    // const deleteOne = async() => {
    //     console.log('delete button works')
    //     const pokemon = await axios.delete(`api/pokemons/624616129cb0f07da3f77470`)
    //     console.log(pokemon)
    // }


    const deleteOne = (id) => {
        setPokemon(props.filter((pokemon) => props._id !== id))
    }


    if (selectPokemon) {
        return(
            <div className='poketypes'>
                <br />
                <h2>N° {selectPokemon.num}</h2>
                <h3>{selectPokemon.name}</h3>
                <img src = {selectPokemon.img} alt = {selectPokemon.img} style={{width:'300px'}}/>
                <br />
                Type: {selectPokemon.type}
                <br />
                Height: {selectPokemon.height}
                <br />
                Weight: {selectPokemon.weight}
                <br />
                Weakness: {selectPokemon.weaknesses}
                <br />
                {/* <button onClick={deleteOne}>Delete</button> */}
                <button variant="primary" onClick={() => props.push(`/api/pokemons/${id}`)}>Edit</button>{' '}
                {/* <button onClick={() => deleteOne}>Deleteeee</button> */}
                <button onClick={() => props.deleteOne(props._id)}>Deleteeeeyyyy</button>
                <br />
            </div>
        )

    } else {
        return ('Pokemon loading...')
    }
}

export default Pokemon