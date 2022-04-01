import { defaultMaxListeners } from 'keyv'
import React from 'react'

const Delete = (props) => {
    return(
        <button onClick={props.deleteOne}>Delete</button>
    )
}

export default Delete