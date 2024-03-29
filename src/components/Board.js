import React from "react";
import Square from "./Square";

export default function Board(props) {
  const renderSquare = (i) => {
    return <Square onClick={() => props.onClick(i)} value={props.squares[i]} />;
  };
  return (
    <div>
      <div className="border-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="border-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="border-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
