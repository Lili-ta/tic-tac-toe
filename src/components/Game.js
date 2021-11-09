import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component {
    state = {
        xIsNext: true,
        step: 0,
        history: [{ squares: Array(9).fill(null) }],
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