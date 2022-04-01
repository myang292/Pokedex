import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PokeCard = (props) => {

console.log(props)

    return(
        <div className='pokecard'>
            <img src ={props.img} />
            {props.name}
        </div>
    )
}

export default PokeCard