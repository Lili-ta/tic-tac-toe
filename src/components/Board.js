import React from "react";

export default function Board() {
  const renderSquares = (i) => {
    return <square onClick={(i) => props.onClick(i)} value={square.value} />;
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
