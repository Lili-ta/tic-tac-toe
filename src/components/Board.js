import React from "react";
import Square from './Square'

export default function Board(props) {
  const renderSquares = (i) => {
    return <Square onClick={() => props.onClick(i)} value={props.squares[i]} />;
  };
  return (
    <div className="board">
      <div className="border-row">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="border-row">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="border-row">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </div>
  );
}
