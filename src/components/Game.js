import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner } from "../appHelpers";

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

  jumpTo = (step) => {
    this.setState({
      step: step,
      xIsNext: step % 2 === 0,
    });
  };
  render() {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go To # " + move : "Start The Game";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner Is " + winner;
    } else {
      status = "Next Player Is " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-border">
          <Board
            onClick={(i) => this.onClickHandler(i)}
            squares={current.squares}
          />
          <div className="game-info">
            <ul>{status}</ul>
            <ul>{moves}</ul>
          </div>
        </div>
      </div>
    );
  }
}
