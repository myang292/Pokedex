import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DropBar = ({ label, value, options, onChange }) => {
    
    //.FILTER!!!!!!
    return(
        <div>
            <label>
                <select className='dropdown' value = {value} onChange={onChange}>
                    {options.map((options) => (
                        <option key={options._id} value={options._id} onChange={onChange}>{options.label}</option>
                    ))}
                </select>
            </label>
        </div>



    )
}

export default DropBar