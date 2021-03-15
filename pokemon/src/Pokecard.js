import React, { Component } from 'react';
import './Pokecard.css'
// const POKE_API="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// change the id of the number to three decimal places
let padToThree = (number)=>(number<=999?`00${number}`.slice(-3):number);
//2 zeroes are added in front of number and then 3 digits of numbers are sliced so always only 3 digits are present
//23=>0023=>023
class Pokecard extends Component {
    render() {
        let imgSrc=`${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
               <h1 className="Pokecard-title">{this.props.name}</h1> 
               <img src={imgSrc} alt={imgSrc}/>
               <div className="Pokecard-data">Type: {this.props.type}</div>
               <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;