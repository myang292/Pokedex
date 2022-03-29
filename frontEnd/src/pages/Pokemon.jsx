import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokePage from '../components/PokePage'

const Pokemon = (props) => {



    if (Pokemon) {
    return(
        <div>
            Working
            <PokePage />
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