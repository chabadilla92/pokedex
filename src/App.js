import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./components/header"
import Main from "./pages/main"
import MyTeam from "./pages/myTeam"




function App() {
  // Creating state to hold the Pokemon Object Data, Async to pull, UseEffect to invoke function upon first render
  const [pokemon, setPokemon] = useState(null)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`
  const getPokemon = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(data);
  }
  // console.log('App console, state-', pokemon)

  const [team, setTeam] = useState([])
const addToTeam = (pokemon) => {
  setTeam([...team, pokemon])
}

const removeFromTeam = (pokemon) => {
  const index = team.findIndex((poke) => pokemon.id === poke.id)
  const updatedArray = [...team]
  updatedArray.splice(index, 1)
  setTeam(updatedArray)
}
  useEffect(() => {getPokemon()}, []);
  

  // Creating state to hold the Pokemon CARD information
  // const [pokemonCard, setPokemonCard] = useState([])
  // Creating onClick function 
  // const addToCard = (card) = {
  //   setPokemonCard([...pokemonCard, card]);
  // }


  const loaded = () => {
  return (
    <div className="App">

      <Header />
      <Switch>

      <Route exact path="/">
        <Main pokemonArr={pokemon} addToTeam={addToTeam}/>
      </Route>

      

      <Route path="/MyTeam">
        <MyTeam team={team} remove={removeFromTeam}/>
      </Route>

      </Switch>
    </div>
  );
  }

  const loading = () => {
    return <h1> Pika Pika...</h1>
  }

  return pokemon ? loaded() : loading()
}

export default App;
