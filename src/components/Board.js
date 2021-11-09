import React from "react";

export default function Board(props) {
  const renderSquares = (i) => {
    return <square onClick={() => props.onClick(i)} value={props.value.squares[i]} />;
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
