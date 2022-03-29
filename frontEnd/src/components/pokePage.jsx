import React from 'react'

const pokePage = (props) => {

    return( 
        <div onClick={(props.onClick)}>
            <h4>{props.num}</h4>
            <h3>{props.name}</h3>
            <img src = {props.img} />
            <p>
                {props.height}
                {props.weight}
                {props.weakness}
            </p>
        </div>
    )
}

export default pokePage