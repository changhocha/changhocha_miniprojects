import React, { useState } from "react";
import Gameboard from "./Gameboard";
import Computerboard from "./Computerboard";

const Game = () => {
  const [p1Click, setp1Click] = useState("");

  if (p1Click === "p1Rock") {
    const playerChoice = "Rock";
    console.log(playerChoice);
  } else if (p1Click === "p1Paper") {
    const playerChoice = "Paper";
    console.log(playerChoice);
  } else if (p1Click === "p1Scissors") {
    const playerChoice = "Scissors";
    console.log(playerChoice);
  }

  const handleClick = (p1Selected) => () => {
    setp1Click(p1Selected);
  };

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["cpRock", "cpPaper", "cpScissors"];
    return rpsArray[randomNumber];
  };

  const determineWinner = (playerChoice, computerChoice) => {};

  const finishGame = () => {
    const computerChoice = getcomputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
  };

  return (
    <div>
      <Gameboard
        p1Click={p1Click}
        onClick={handleClick}
        gbtitle="플레이어 선택"
      />
      <Computerboard cbtitle="컴퓨터 선택" />
    </div>
  );
};

export default Game;
