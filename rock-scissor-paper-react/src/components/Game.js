import React, { useState } from "react";
import Gameboard from "./Gameboard";
import Computerboard from "./Computerboard";

const Game = () => {
  const [p1Click, setp1Click] = useState("");
  const [p1Choice, setp1Choice] = useState("");
  const [CPUchoice, setCPUchoice] = useState("");
  const [winner, setWinner] = useState("");

  if (p1Click === "p1Rock") {
    setp1Choice("Rock");
    console.log(p1Choice);
  } else if (p1Click === "p1Paper") {
    setp1Choice("Paper");
    console.log(p1Choice);
  } else if (p1Click === "p1Scissors") {
    setp1Choice("Scissors");
    console.log(p1Choice);
  }

  const handleClick = (p1Selected) => () => {
    setp1Click(p1Selected);
    getComputerChoice();
  };

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["Rock", "Paper", "Scissors"];
    setCPUchoice(rpsArray[randomNumber]);
    console.log(CPUchoice);
    determineWinner();
  };

  const determineWinner = () => {
    if (p1Choice === CPUchoice) {
      setWinner("Tie");
    } else if (
      (p1Choice === "Rock" && CPUchoice === "Paper") ||
      (p1Choice === "Paper" && CPUchoice === "Scissors") ||
      (p1Choice === "Scissors" && CPUchoice === "Rock")
    ) {
      setWinner("Computer");
    } else {
      setWinner("Player");
    }
  };

  return (
    <div>
      <Gameboard
        p1Click={p1Click}
        onClick={() => handleClick}
        gbtitle="플레이어 선택"
      />
      <Computerboard cbtitle="컴퓨터 선택" />
    </div>
  );
};

export default Game;
