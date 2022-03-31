import './styles/App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllPokemon from './pages/AllPokemon'
import PokeType from './pages/PokeType'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Pokemon from './pages/Pokemon'



function App() {
  const [pokemon, setPokemon] = useState([])
  
  const getPokemon = async() => {
    const pokemonList = await axios.get('http://localhost:3001/api/pokemons')
    setPokemon(pokemonList.data)
    // console.log(pokemonList.data)
  }


  const [poketypes, setPoketypes] = useState([])

  const getPoketypes = async() => {
    const poketypes = await axios.get('http://localhost:3001/api/poketypes')
    setPoketypes(poketypes.data)
    console.log(poketypes.data)
  }

  

  useEffect(() => {
    getPokemon()
    getPoketypes()
  },[])


  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home pokemon={pokemon}/>} />
          <Route path='pokemon' element={<AllPokemon pokemon={pokemon}/>} />
          <Route path='pokemon/:id' element={<Pokemon pokemon={pokemon}/>} />
          <Route path="/poketypes" element={<PokeType poketypes={poketypes}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;