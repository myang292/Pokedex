import axios from 'axios'
import React, { useState } from 'react'
import DropBar from '../components/DropBar'

const PokeType = (props) => {

    const[type, setType] = useState([])

    const findType = async(e) => {
        if (e.target.value==='') {
            return
        } else {
            const type = await axios.get(`localhost:3001/api/poketypes/${e.target.value}`)
        }
        setType(type.data.name)
        
    }
    
    return(
        <div>
            <DropBar 
                options={[
                    {label:"Pokemon Type", value:''},
                    {label:"bug", value:'bug'},
                    {label:"dragon", value:'dragon'},
                    {label:"electric", value:'electric'},
                    {label:"fighting", value:'fighting'},
                    {label:"fire", value:'fire'},
                    {label:"flying", value:'flying'},
                    {label:"grass", value:'grass'},
                    {label:"ghost", value:'ghost'},
                    {label:"ground", value:'ground'},
                    {label:"ice", value:'ice'},
                    {label:"normal", value:'normal'},
                    {label:"poison", value:'poison'},
                    {label:"psychic", value:'psychic'},
                    {label:"rock", value:'rock'},
                    {label:"water", value:'water'}
                ]}
                onChange={findType} 
            />
        </div>
    )
}


export default PokeType