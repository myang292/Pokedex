import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DropBar = ({ label, value, options, onChange }) => {


    
    //.FILTER!!!!!!
    return(
        <div>
                Pokemon Types
        <label>
            <select value = {value} onChange={onChange}>
                {options.map((options) => (
                    <option key={options._id} value={options.name}>{options.label}</option>
                ))}
            </select>
        </label>


        </div>



    )
}

export default DropBar