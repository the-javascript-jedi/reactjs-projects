import React, { Component } from 'react';
import Pokedex from './Pokedex'
class PokeGame extends Component {
    static defaultProps={
        pokemon:[
            {id:4,name:'Charmander',type:'fire',base_experience:62},
            {id:7,name:'Squirtle',type:'water',base_experience:63},
            {id:11,name:'Metapod',type:'bug',base_experience:72},
            {id:12,name:'Butterfree',type:'flying',base_experience:178},
            {id:25,name:'Pikachu',type:'electric',base_experience:112},
            {id:39,name:'Jigglypuff',type:'normal',base_experience:95},
            {id:94,name:'Gengar',type:'poison',base_experience:225},
            {id:133,name:'Eevee',type:'normal',base_experience:65},
        ]
    }
    render() {
        //randomize the array 1
        let hand1=[];
        let hand2=[...this.props.pokemon];        
        // loop till both arrays are of equal length
        while(hand1.length<hand2.length){
            //randIx - get a random index from inside the array hand2
            //Math.floor gives lower decimal value // Math.floor(5.95) => 5
            let randIx=Math.floor(Math.random()*hand2.length);
            let randPokemon=hand2.splice(randIx,1)[0];
            // hand2.splice(randIx,1)[0] -  choose from an array of objects the first item in array
            hand1.push(randPokemon)
        }
        console.log("hand1",hand1);
        console.log("hand2",hand2);
        // calculate the total experience
       let exp1=  hand1.reduce((exp,pokemon)=>exp+pokemon.base_experience,0)
       let exp2=  hand2.reduce((exp,pokemon)=>exp+pokemon.base_experience,0)

        return (
            <div>
               <h1>PokeGame</h1> <br/>
               <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
               <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1}/>
            </div>
        );
    }
}

export default PokeGame;