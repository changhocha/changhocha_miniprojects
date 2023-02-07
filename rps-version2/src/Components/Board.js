import React from "react";
import Choice from "./Choice";
import Scoreboard from "./Scoreboard";

const Board = ({ p1Choice, cpuChoice, winner, handleClick, score }) => {
  return (
    <div>
      <div className="Board">
        <h1>Rock Paper Scissors</h1>
        <Scoreboard score={score} />
        <h3>Player Chooses...{p1Choice}</h3>
        <div className="p1Board">
          <Choice value="Rock" handleClick={handleClick} />
          <Choice value="Paper" handleClick={handleClick} />
          <Choice value="Scissors" handleClick={handleClick} />
        </div>
        <h3>Cpu Chooses...{cpuChoice}</h3>
        <div className="cpuBoard">
          <Choice value="Rock" handleClick={null} />
          <Choice value="Paper" handleClick={null} />
          <Choice value="Scissors" handleClick={null} />
        </div>
        {winner === null ? null : (
          <h3>{winner === "Tie" ? "Tie Game" : winner + "Win!"}</h3>
        )}
      </div>
    </div>
  );
};

export default Board;
