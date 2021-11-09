import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component {
    state = {
        xIsNext: true,
        step: 0,
        history: [{ squares: Array(9).fill(null) }],
      };
    render() {
        return (
            <div>
                <Board
                
                />
            </div>
        )
    }
}
