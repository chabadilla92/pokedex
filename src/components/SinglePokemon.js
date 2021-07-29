import React from "react";

const SinglePokemon = (props) => {

    console.log('Singlepokemon data-', props)
    
    const loaded = () => {
    return( 
        <div className="onePokemon">
            <div className="sprite-and-name">
                <img src={props.select.img} alt={props.select.name}/>
                <h3>{props.select.name}</h3>
                <h3>Type: {props.select.type}</h3>
                <button onClick={() => props.handleClick(props.select)}>{props.label}</button>
            </div>
        </div>
    )
    }

    const loading = () => {
        return <h1> No Pokemon selected, go Catch some more !</h1>
    }

    return props.select ? loaded() : loading()
}

export default SinglePokemon