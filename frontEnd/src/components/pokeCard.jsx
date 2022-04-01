import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PokeCard = (props) => {

    return(
        <div className='pokecard'>
            <img className = 'search-poke-img' src ={props.img} />
            {props.name}
        </div>
    )
}

export default PokeCard