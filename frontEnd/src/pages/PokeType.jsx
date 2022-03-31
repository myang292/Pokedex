import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import DropBar from '../components/DropBar'
import CRUD from '../components/CRUD'

const PokeType = (props) => {

    const[type, setType] = useState([])



    return(
        <div>
            <br />
            <br />
            <br />
            <DropBar className='options'
                options={[
                    {label:"Pokemon Type", value:''},
                    {label:"Bug", value:'6240d3c9120ccefe46bc7b7c'},
                    {label:"Dragon", value:'dragon'},
                    {label:"Electric", value:'electric'},
                    {label:"Fighting", value:'fighting'},
                    {label:"Fire", value:'fire'},
                    {label:"Flying", value:'flying'},
                    {label:"Grass", value:'grass'},
                    {label:"Ghost", value:'ghost'},
                    {label:"Ground", value:'ground'},
                    {label:"Ice", value:'ice'},
                    {label:"Normal", value:'normal'},
                    {label:"Poison", value:'poison'},
                    {label:"Psychic", value:'psychic'},
                    {label:"Rock", value:'rock'},
                    {label:"Water", value:'water'}
                ]}
                // onChange={findType} 
            />
            <CRUD />
        </div>
    )
}


export default PokeType