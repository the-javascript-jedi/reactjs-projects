import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
    static defaultProps={
        title:'Lotto',
        numBalls:6,
        maxNum:40
    }
    constructor(props){
        super(props);
        // create an array with the number of numBalls
        this.state={nums:Array.from({length:this.props.numBalls})}
    }
    // generate random numbers between 1 and maxNum
    // the no of balls must be maxNum
    generate=()=>{
        // setState using callback instead of object
        this.setState(curState=>({
            // create a new array and set randomnumbers to the array nums which was created using Array.from
            nums:curState.nums.map(n=>Math.floor(Math.random()*this.props.maxNum))
        }))
    }
    handleClick=()=>{
        this.generate();
    }
    render() {
        return (
            <section className="Lottery">
              <h1>{this.props.title}</h1>
              <div>
               {this.state.nums.map((n)=>{
                  return <Ball num={n}/>
               })}
              </div>  
              <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;