import React, { useState } from "react";
import Gameboard from "./Gameboard";

const Game = () => {
  const [p1click, setp1Click] = useState("");
  const getp1Click = (p1click) => {
    setp1Click(p1click);
  };

  if (p1click === "p1Rock") {
    const playerSetected = "Rock";
    console.log(playerSetected);
  } else if (p1click === "p1Paper") {
    const playerSelected = "Paper";
    console.log(playerSelected);
  } else if (p1click === "p1Scissors") {
    const playerSelected = "Scissors";
    console.log(playerSelected);
  }

  return (
    <div>
      <Gameboard p1click={p1click} getp1Click={getp1Click} />
    </div>
  );
};

export default Game;
