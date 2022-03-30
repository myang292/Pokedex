import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DropBar = (props) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }



    // let {id} = useParams()

    // const [selectType, setType] = useState('')

    // useEffect(() => {
    //     let selectType = props.pokemon.find(
    //         (pokemon) => pokemon.type === 
    //         )
    //         setType(selectType)
    //         console.log(setType)
    //     }, [])


    // const showType = (pokemon) => {
    //     display({pokemon.type})
    //     }


    //.FILTER!!!!!!
    return(
        <div>
            <label>
                Pokemon Types
                <select value={value} onChange={handleChange}>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="electric">Electric</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="grass">Grass</option>
                    <option value="ghost">Ghost</option>
                    <option value="ground">Ground</option>
                    <option value="ice">Ice</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Poison</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="water">Water</option>
                </select>
            </label>
{/* 
            {props.pokemon.map((pokemon) => {
                return(
                <div>
                    <div className="poketype" onChange={() => showType(pokemon)} key={pokemon.type}>
                        <img style={{ display: 'block' }} src={pokemon.img} alt={pokemon.img} />
                        <h3>{pokemon.name}</h3>
                        <h3>{pokemon.type}</h3>
                    </div>
              </div>
                )
            })}  */}



        </div>



    )
}

export default DropBar