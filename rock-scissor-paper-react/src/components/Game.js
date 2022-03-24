import React, { useState } from "react";
import Gameboard from "./Gameboard";
import Computerboard from "./Computerboard";

const Game = () => {
  const [p1Click, setp1Click] = useState("");
<<<<<<< HEAD
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
=======

  if (p1Click === "p1Rock") {
    const playerChoice = "Rock";
    console.log(playerChoice);
  } else if (p1Click === "p1Paper") {
    const playerChoice = "Paper";
    console.log(playerChoice);
  } else if (p1Click === "p1Scissors") {
    const playerChoice = "Scissors";
    console.log(playerChoice);
>>>>>>> e57f8fdb589a0309e49e92c1142ffd26dfafd815
  }

  const handleClick = (p1Selected) => () => {
    setp1Click(p1Selected);
<<<<<<< HEAD
    getComputerChoice();
=======
>>>>>>> e57f8fdb589a0309e49e92c1142ffd26dfafd815
  };

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
<<<<<<< HEAD
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
=======
    const rpsArray = ["cpRock", "cpPaper", "cpScissors"];
    return rpsArray[randomNumber];
  };

  const determineWinner = (playerChoice, computerChoice) => {};

  const finishGame = () => {
    const computerChoice = getcomputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
>>>>>>> e57f8fdb589a0309e49e92c1142ffd26dfafd815
  };

  return (
    <div>
      <Gameboard
        p1Click={p1Click}
<<<<<<< HEAD
        onClick={() => handleClick}
=======
        onClick={handleClick}
>>>>>>> e57f8fdb589a0309e49e92c1142ffd26dfafd815
        gbtitle="플레이어 선택"
      />
      <Computerboard cbtitle="컴퓨터 선택" />
    </div>
  );
};

export default Game;
