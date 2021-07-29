import React from "react"
import AllPokemon from '../components/AllPokemon'
import SinglePokemon from '../components/SinglePokemon'


const Main = (props) => {
    console.log('Main console-', props.pokemonArr)

    // state to grab a selected pokemon
const [select, setSelect] = React.useState(null)

// create a function to change that state
// another api call to pull the url data from pokemonArr
const selectPokemon = async (pokemon) => {
    const response = await fetch(pokemon.url) // making an API call to the URL underneath pokemon.url !!
    const data = await response.json()
    setSelect({
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        img: data.sprites.front_default
    })
}





return (
    <div>
        <div className="container"><AllPokemon pokemonArr={props.pokemonArr} selectPokemon={selectPokemon} />
        <div><SinglePokemon select={select} handleClick={props.addToTeam} label="Add To Team"/></div>
        
        </div>
    </div>
    )



}

export default Main 