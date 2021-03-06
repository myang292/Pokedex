import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CRUD = (props) => {

    const url = 'http://localhost:3001/api/add-pokemon'
    const [data, setData] = useState({
        num:'',
        name:'',
        img:'',
        height:'',
        weight:'',
        type:'',
        weaknesses:''
    })
    function submit (e) {
        e.preventDefault()
        axios.post(url, {
            num: data.num,
            name: data.name,
            img: data.img,
            height: data.height,
            weight: data.weight,
            type: data.type,
            weaknesses: data.weaknesses,
        })
        navigate('/pokemon')
        window.location.reload(true)
        }
        
    function onChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    let navigate = useNavigate()
    

    return(

        <div className='add-options'>
            <form onSubmit = { submit } >
                <input type='text' id={'num'} name={'num'} placeholder={'Pokemon Number'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'name'} name={'name'} placeholder={'Pokemon Name'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'img'} name={'img'} placeholder={'Image URL'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'height'} name={'weight'} placeholder={'Pokemon Height'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'weight'} name={'weight'} placeholder={'Pokemon Weight'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'type'} name={'type'} placeholder={'Pokemon Type'} onChange = {(e) => onChange(e)} />
                <br />
                <input type='text' id={'weaknesses'} name={'weaknesses'} placeholder={'Pokemon Weaknesses'} onChange = {(e) => onChange(e)} />
                <br />
                <button className='types-search-button'>Submit</button>
            </form>
        </div>


    )
}


export default CRUD