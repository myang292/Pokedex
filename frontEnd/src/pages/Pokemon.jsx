import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Pokemon from './components/Pokemon'

const Pokemon = (props) => {



    if (Pokemon) {
    return(
        <div>
            Working
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