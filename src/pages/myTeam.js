import React from "react-router-dom"
import SinglePokemon from '../components/SinglePokemon'

const MyTeam = (props) => {
    return <div>
        {props.team.map((member) => <SinglePokemon select={member} key={member.id} handleClick={props.remove} label="Remove from Team"/>)}

    </div>
}

export default MyTeam