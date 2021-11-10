import React, { Component } from "react";
import Board from "./Board";

export default class Game extends Component {
  state = {
    xIsNext: true,
    step: 0,
    history: [{ squares: Array(9).fill(null) }],
  };

  onClickHandler = (i) => {
    const prevHistory = this.state.history.slice(0, this.state.step + 1);
    const lastHistory = prevHistory[prevHistory.length - 1];
    const lastSquares = lastHistory.squares.slice();
    lastSquares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: prevHistory.concat({
        squares: lastSquares,
      }),
      xIsNext: !this.state.xIsNext,
      step: prevHistory.length,
    });
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.step];

    return (
      <div className="game">
        <div className="game-border">
          <Board
            onClick={(i) => this.onClickHandler(i)}
            squares={current.squares}
          />
        </div>
      </div>
    );
  }
}
