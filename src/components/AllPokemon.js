import React from "react"

const AllPokemon = (props) => {
    console.log('AllPokemon console 1-', props.pokemonArr.results[0])

    

    // return (
    //     <div>hi</div>
    // )

    return(
        <div className="leftScreen"> 
            <h2 className="pokemonNames">

                    {props.pokemonArr.results.map((pokemon) => {
                        const {name} = pokemon;
                        return (
                            <div className="name">
                            <div onClick={() => props.selectPokemon(pokemon)}>{name}</div>
                            <img class="pokeball" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/closed-pokeball-color.png"></img>
                            </div>
                        )
                    })}
                    

            </h2>
        </div>
    )
}

export default AllPokemon