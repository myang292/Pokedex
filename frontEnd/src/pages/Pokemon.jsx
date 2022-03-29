import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokeCard from '../components/PokeCard'

const Pokemon = (props) => {

    if (Pokemon) {
    return(
        <div>
            Working
            <PokeCard num={props.num} name={props.name}/>
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