import { useState, useEffect } from 'react'
import axios from 'axios'


const PokeCard = (props) => {

    const [PokeCard, setPokeCard] = useState()

    const getPokeCard = async() => {
        const response = await axios.get('http://localhost:3001/api/pokemons')
        const data = await response.json()
        setPokeCard(data.PokeCard)
    }

    useEffect (() => {
        getPokeCard()
    }, [])

    return(
        <div>
            <h4>{props.num}</h4>
            <img src = {props.img} alt = {props.img} onClick={props.onClick}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default PokeCard