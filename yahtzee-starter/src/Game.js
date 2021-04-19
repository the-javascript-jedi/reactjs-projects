import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
    }));
  }

  toggleLocked = (idx) => {
    console.log(idx);
    // toggle whether idx is in locked or not
    this.setState((st) => ({
      locked: [
        // we take the old version of locked and keep everything the same from before the index
        ...st.locked.slice(0, idx),
        // at the index we flip it
        !st.locked[idx],
        //we take the rest of the array and keep it the same as well
        ...st.locked.slice(idx + 1),
      ],
    }));
  };
  // doScore is called in RuleRow.js--onClick={this.props.doScore}
  // the arguments for the function are passed in from ScoreTable.js
  // <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      // { ...st.scores--we are taking all of the existing scores and putting them back in the scores object,
      // [rulename]: ruleFn(this.state.dice)-["fourOfAKind"]:40 } --["fourOfAKind"] is the [rulename]and 40 is the evaluated ruleFn result
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.roll();
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={this.state.locked.every((x) => x)}
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
