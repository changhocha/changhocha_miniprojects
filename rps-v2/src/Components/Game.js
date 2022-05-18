import React from "react";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

const Game = () => {
  return (
    <div>
      <Scoreboard />
      <Scoreboard />
      <Gameboard />
    </div>
  );
};

export default Game;
