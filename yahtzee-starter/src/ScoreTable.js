import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

class ScoreTable extends Component {
  getTotalScore() {
    const { scores } = this.props;
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) {
        totalScore += scores[key];
      }
    }
    return totalScore;
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                description={ones.description}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                description={twos.description}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                description={threes.description}
                doScore={(evt) => doScore("threes", threes.evalRoll)}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                description={fours.description}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                description={fives.description}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                description={sixes.description}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                description={threeOfKind.description}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                description={fourOfKind.description}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                description={fullHouse.description}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                description={smallStraight.description}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                description={largeStraight.description}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                description={yahtzee.description}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                description={chance.description}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <h2>TOTAL SCORE: {this.getTotalScore()}</h2>
      </div>
    );
  }
}

export default ScoreTable;
