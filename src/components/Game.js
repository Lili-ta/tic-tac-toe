import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner} from "../appHelpers";

export default class Game extends Component {
  state = {
    xIsNext: true,
    step: 0,
    history: [{ squares: Array(9).fill(null) }],
  };

  onClickHandler = (i) => {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      step: history.length,
    });
  };
  

  // onClickHandler = (i) => {
  //   const prevHistory = this.state.history.slice(0, this.state.step + 1);
  //   const lastHistory = prevHistory[prevHistory.length - 1];
  //   const lastSquares = lastHistory.squares.slice();
  //   const winner = calculateWinner(lastSquares);
  //   if(winner || lastSquares[i]){return;}
  //   lastSquares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     history: prevHistory.concat({
  //       squares: lastSquares,
  //     }),
  //     xIsNext: !this.state.xIsNext,
  //     step: prevHistory.length,
  //   });
  // };
  render() {
    const prevHistory = this.state.history;
    const lastHistory = prevHistory[this.state.step];

    return (
      <div className="game">
        <div className="game-border">
          <Board
            onClick={(i) => this.onClickHandler(i)}
            squares={lastHistory.squares}
          />
        </div>
      </div>
    );
  }
};
