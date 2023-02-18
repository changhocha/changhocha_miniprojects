import React, { useState } from "react";
import Board from "./Board";

const chooseRandom = () => {
  const choice = ["Rock", "Paper", "Scissors"];
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return choice[rand(0, 2)];
};

const Game = () => {
  const [choice, setChoice] = useState([null, null]);
  const handleClick = (e) => {
    const playerChoice = e.target.id;
    const cpuChoice = chooseRandom();
    setChoice([playerChoice, cpuChoice]);
  };
  const handleinitclick = (e) => {
    setChoice([null, null]);
  };

  return (
    <div>
      <Board
        p1Choice={choice[0]}
        cpuChoice={choice[1]}
        handleClick={handleClick}
        handleinitclick={handleinitclick}
      />
    </div>
  );
};

export default Game;
