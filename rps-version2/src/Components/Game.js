import React, { useReducer } from "react";
import Board from "./Board";
import { postReducer } from "../postReducer/postReducer";
import "./Game.css";

const chooseRandom = () => {
  const choice = ["Rock", "Paper", "Scissors"];
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return choice[rand(0, 2)];
};

const Game = () => {
  const [choice, dispatch] = useReducer(postReducer, [null, null]);
  React.useEffect(() => {
    console.log(choice);
  });

  const handleClick = (e) => {
    const playerChoice = e.target.id;
    const cpuChoice = chooseRandom();
    dispatch({ type: "SET_CHOICE", payload: [playerChoice, cpuChoice] });
  };
  const handleinitclick = () => {
    dispatch({ type: "INIT_CHOICE" });
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
