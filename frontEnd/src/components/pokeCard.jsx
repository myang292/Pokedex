import { useState, useEffect } from 'react'
import axios from 'axios'


const PokeCard = (props) => {

    const [PokeCard, setPokeCard] = useState()

    const getPokeCard = async() => {
        const response = await axios.get('http://localhost:3001/api/pokemons')
        const data = await response.json()
        setPokeCard(data.PokeCard)
    }


    // useEffect(() => {
    //     pokeCard = props.pokemons.map((pokemon) => {

    //     }
    // )})

    useEffect (() => {
        getPokeCard()
    }, [])

    return(
        <div>
            {props.num}
            {props.name}
            {props.height}
            {props.weight}
        </div>
    )
}

export default PokeCard