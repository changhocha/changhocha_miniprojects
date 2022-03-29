import React, { useState } from "react";
import Gameboard from "./Gameboard";

const Game = () => {
  const [p1Click, setp1Click] = useState("");
  const [isSelected, setisSelected] = useState(false);

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[randomNumber];
  };

  const determineWinner = (player1, player2) => {
    const player2Win =
      (player1 === "Rock" && player2 === "Paper") ||
      (player1 === "Paper" && player2 === "Scissors") ||
      (player1 === "Scissors" && player2 === "Rock");
    const tie = player1 === player2;
    return tie ? "Tie" : player2Win ? "Computer" : "Player";
  };

  const handleClick = (p1Selected) => () => {
    const CPUchoice = getComputerChoice();
    const result = determineWinner(p1Selected, CPUchoice);
    setisSelected(true);
    visiable(p1Selected);
    console.log(result);
  };

  const visiable = (p1Selected) => {
    const visRock = {
      Rock: true,
      Paper: false,
      Scissors: false,
    };
    const visPaper = {
      Rock: false,
      Paper: true,
      Scissors: false,
    };
    const visScissors = {
      Rock: false,
      Paper: false,
      Scissors: true,
    };
    if (p1Selected === "Rock") {
      return visRock;
    } else if (p1Selected === "Paper") {
      return visPaper;
    } else {
      return visScissors;
    }
  };

  return (
    <div>
      <Gameboard
        p1Click={p1Click}
        onClick={handleClick}
        gbtitle="플레이어 선택"
        cbtitle="컴퓨터 선택"
        visialbe={visiable}
        isSelected={isSelected}
      />
    </div>
  );
};

export default Game;
