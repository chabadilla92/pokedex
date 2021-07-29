import React from "react";
import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <div className="navbar">
            <img class="pikachu" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pikachu.gif"></img>
            <Link to="/"><div>Pokédex</div></Link>
            <img class="logo" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png"></img>
            <Link to="/MyTeam"><div>My Team</div></Link>
        </div>
    )
}

export default Header