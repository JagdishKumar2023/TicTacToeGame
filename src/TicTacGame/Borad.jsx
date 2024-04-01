import React, { useState } from "react";
import Squre from "./Squre";

const Borad = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  //   console.log("state", state);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    let copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setXTurn(!isXTurn);
    // console.log("Clicked in index", index);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="boardContainer">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>{" "}
        </>
      ) : (
        <>
          <h4>Player {isXTurn ? "X" : "0"} please move </h4>
          <div className="boardRow">
            <Squre value={state[0]} onClick={() => handleClick(0)} />
            <Squre value={state[1]} onClick={() => handleClick(1)} />
            <Squre value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="boardRow">
            <Squre value={state[3]} onClick={() => handleClick(3)} />
            <Squre value={state[4]} onClick={() => handleClick(4)} />
            <Squre value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="boardRow">
            <Squre value={state[6]} onClick={() => handleClick(6)} />
            <Squre value={state[7]} onClick={() => handleClick(7)} />
            <Squre value={state[8]} onClick={() => handleClick(8)} />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Borad;
