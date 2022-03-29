import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PokeCard = (props) => {

    // let {id} = useParams()

    // const [selectedPokemon, setPokemon] = useState('')

    // useEffect(() => {
    //     let selectedPokemon = props.pokemons.filter(
    //         (pokemon) => pokemon._id === (id)
    //     )
    //     setPokemon(selectedPokemon)
    // }, [props.pokemons, id])

    // console.log(selectedPokemon)
    

    return(
        <div>
            {/* <h2>Workingggggg</h2> */}
            {props.num}
            {props.name}
            <img src ={props.img} alt={props.img} onClick={props.onClick}/>

        </div>
    )
}

export default PokeCard