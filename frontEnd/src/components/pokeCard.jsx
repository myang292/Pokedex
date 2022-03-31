import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PokeCard = (props) => {


    return(
        <div>
            {props.num}
            <br />
            {props.name}
            <br />
            <img src ={props.img} alt={props.img} onClick={props.onClick} style={{width:'250px'}}/>

        </div>
    )
}

export default PokeCard