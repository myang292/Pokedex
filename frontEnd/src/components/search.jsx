import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        <input className='search-query' type='text' name='search' value={props.value} placeholder='Pokemon Name' onChange={props.onChange} > 
        </input>
        <br />
        <button className = 'home-search-button' onClick={props.onSubmit}>Search</button>
     </div>
    )
}

export default Search