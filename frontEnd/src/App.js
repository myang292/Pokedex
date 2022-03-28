import './styles/App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from './pages/Pokemon'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'


function App() {
  
  const getPokemon = async() => {
    const pokemonList = await axios.get('http://localhost:3001/api/pokemons')
    setPokemon(pokemonList.data)
    console.log(pokemonList.data)
  }
  
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon()
  },[])




  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home pokemon={pokemon}/>} />
          <Route path='pokemon' element={<Pokemon pokemoon={pokemon}/>} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;