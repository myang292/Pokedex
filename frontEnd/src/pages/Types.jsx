import axios from 'axios'
import React, { useState, useEffect } from 'react'
import DropBar from '../components/DropBar'
import Footer from '../components/Footer'


const Types = (props) => {

    const [poketypes, setPoketypes] = useState([])
    const getPoketypes = async() => {
        const poketypes = await axios.get('http://localhost:3001/api/poketypes')
        setPoketypes(poketypes.data)
    }

    const findByType = (props) => 
        {props.poketypes.filter((Poketypes) => {
            return (
                <div>
                    {Poketypes.name}
                    <br />
                    {Poketypes.weaknesses.join(',')}
                </div>
            )
            })
        }
        
    return(
        <div>
        <br />
        <br />
            <h2>Choose a type!</h2>
            <br />
            <DropBar className='options'
                options={[
                    {label:"Pokemon Type", value:''},
                    {label:"Bug", value:'6240d3c9120ccefe46bc7b7c'},
                    {label:"Dragon", value:'6245cca1f796cc593f684f07'},
                    {label:"Electric", value:'6245cca1f796cc593f684f08'},
                    {label:"Fighting", value:'6245cca1f796cc593f684f09'},
                    {label:"Fire", value:'6245cca1f796cc593f684f0a'},
                    {label:"Flying", value:'6245cca1f796cc593f684f0b'},
                    {label:"Grass", value:'6245cca1f796cc593f684f0c'},
                    {label:"Ghost", value:'6245cca1f796cc593f684f0d'},
                    {label:"Ground", value:'6245cca1f796cc593f684f0e'},
                    {label:"Ice", value:'6245cca1f796cc593f684f0f'},
                    {label:"Normal", value:'6245cca1f796cc593f684f10'},
                    {label:"Poison", value:'6245cca1f796cc593f684f11'},
                    {label:"Psychic", value:'6245cca1f796cc593f684f12'},
                    {label:"Rock", value:'6245cca1f796cc593f684f13'},
                    {label:"Water", value:'6245cca1f796cc593f684f14'}
                ]}
                onChange={findByType}
            />
            <br />
            <div className = 'type-div-wrapper'>
                {props.poketypes.map((poketype) =>
                    <div className='poketype-wrapper'>
                        <div>
                            <img className = 'poketype-image' src={poketype.img} />
                        </div>
                            <br />
                        <div>
                            {poketype.name}
                        </div>
                            <br />
                        <div className = 'weaknesses'>
                            {poketype.weaknesses.join(',')}
                        </div>
                    </div>
                )}
            </div>
    </div>
    )
}

export default Types