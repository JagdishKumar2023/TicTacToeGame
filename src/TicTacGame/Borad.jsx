import React, { useState } from "react";
import Squre from "./Squre";

const Borad = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  //   console.log("state", state);

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    // console.log("Clicked in index", index);
  };

  return (
    <div className="boardContainer">
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
      </div>
    </div>
  );
};

export default Borad;
