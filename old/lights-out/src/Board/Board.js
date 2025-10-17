import React, { Component } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";
/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game *
 * State:*
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]] *
 *  This should render an HTML table of individual <Cell /> components.
 *  This doesn't handle any clicks --- clicks are on individual cells *
 **/
class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };
  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        // create a row of arrays with random boolean values
        //eg:[true,true,false.true,false]
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }
  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    console.log("coord", coord);
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        // take the current cell and set it to be opposite boolean value
        board[y][x] = !board[y][x];
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    // flip the neighbours
    flipCell(y, x);
    flipCell(y, x - 1); //flip left cells
    flipCell(y, x + 1); //flip right cells
    flipCell(y - 1, x); //flip below cells
    flipCell(y + 1, x); //flip above cells
    // win when every cell is turned off
    // TODO: determine is the game has been won
    // every cell in every row must be false
    let hasWon = board.every((row) => row.every((cell) => !cell));
    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */
  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    if (this.state.hasWon) {
      return (
        <div className="Board-title">
          <div className="winner">
            <span className="neon-orange">YOU</span>
            <span className="neon-blue">WIN</span>
          </div>
        </div>
      );
    }
    // make table board
    // TODO
    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        // create a coordinate using x and y columns to identify the cell
        let coord = `${y}-${x}`;
        // this.state.board will call createBoard which will create an array of rows and columns(nrows x ncols) with true and false values
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      console.log("row", row);
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>{tblBoard}</tbody>
        </table>
      </div>
    );
  }
}
export default Board;
