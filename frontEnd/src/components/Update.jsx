import React, { useState } from 'react'
import axios from 'axios'

const Update = ({id}) => {

    // console.log({id})
    
    const [update, setUpdate] = useState(false)
    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [type, setType] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [weakness, setWeakness] = useState('')

    const updateOne = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/pokemons/${id}`, {num, name, img, type, height, weight, weakness})
        window.location.reload(true)
    }

    return(
        <div>
            {update?
                <form onSubmit={(e) => updateOne(e)}>
                    <input name='num' type='text' placeholder='Pokemon Number' onChange={(e) => setNum(e.target.value)} />
                    <input name='name' type='text' placeholder='Pokemon' onChange={(e) => setName(e.target.value)} />
                    <input name='img' type='text' placeholder='Image URL' onChange={(e) => setImg(e.target.value)} />
                    <input name='type' type='text' placeholder='Pokemon Type' onChange={(e) => setType(e.target.value)} />
                    <input name='height' type='text' placeholder='Pokemon Height' onChange={(e) => setHeight(e.target.value)} />
                    <input name='weight' type='text' placeholder='Pokemon Weight' onChange={(e) => setWeight(e.target.value)} />
                    <input name='weakness' type='text' placeholder='Weakness' onChange={(e) => setWeakness(e.target.value)} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>:
                <button onClick={() => setUpdate(true)}>Edit</button> 
            }
        </div>
    )
}

export default Update