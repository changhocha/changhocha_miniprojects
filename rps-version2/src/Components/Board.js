import React, { useEffect, useState } from "react";
import Choice from "./Choice";
import Scoreboard from "./Scoreboard";
import Initbutton from "./Initbutton";

//calculate winner based on p1Choice and cpuChoice
function calculateWinner(p1Choice, cpuChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const p1Index = choices.indexOf(p1Choice);
  const cpuIndex = choices.indexOf(cpuChoice);
  const diff = p1Index - cpuIndex;
  if (diff === 0) {
    return "Tie";
  } else if (diff === -1 || diff === 2) {
    return "Computer";
  } else {
    return "Player";
  }
}
const Board = ({ p1Choice, cpuChoice, handleClick, handleinitclick }) => {
  const [alert, setAlert] = useState(false);
  const winner = calculateWinner(p1Choice, cpuChoice);
  console.log(winner, p1Choice, cpuChoice);
  const isGameStarted = p1Choice !== null && cpuChoice !== null;
  const renLater = alert === true;
  useEffect(() => {
    if (alert === true) {
      setAlert(false);
    } else if (isGameStarted) {
      const timeout = setTimeout(() => {
        setAlert(true);
        return clearTimeout(timeout);
      }, 2000);
    }
  }, [p1Choice]);

  return (
    <div>
      <div className="Board">
        <h1>Rock Paper Scissors</h1>
        <Scoreboard winner={winner} alert={alert} />
        <h3>Player Chooses...{p1Choice}</h3>
        <div className="p1Board">
          <Choice value="Rock" handleClick={handleClick} />
          <Choice value="Paper" handleClick={handleClick} />
          <Choice value="Scissors" handleClick={handleClick} />
        </div>
        <h3>Cpu Chooses...{renLater ? cpuChoice : null}</h3>
        <div className="cpuBoard">
          <Choice value="Rock" handleClick={null} />
          <Choice value="Paper" handleClick={null} />
          <Choice value="Scissors" handleClick={null} />
        </div>
        {isGameStarted && renLater && (
          <h3>{winner === "Tie" ? "Tie Game" : winner + "Win!"}</h3>
        )}
        <Initbutton alert={alert} handleinitclick={handleinitclick} />
      </div>
    </div>
  );
};

export default Board;
