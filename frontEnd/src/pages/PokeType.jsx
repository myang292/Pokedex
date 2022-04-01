import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import DropBar from '../components/DropBar'
import CRUD from '../components/CRUD'
import Footer from '../components/Footer'

const PokeType = (props) => {

    const[type, setType] = useState([])


    return(
        <div>
            <br />
            <br />
            <h2>Add a new Pokemon!</h2>
            <br />
            <CRUD />
            <br />
        </div>
    )
}


export default PokeType