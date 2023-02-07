import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";

const Game = () => {
  const [p1Choice, setP1Choice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState([0, 0]);
  const cpuChoice = useRef();

  useEffect(() => {
    cpuChoice.current = chooseRandom();
    setWinner(determineWinner(p1Choice, cpuChoice.current));
  }, [p1Choice]);

  useEffect(() => {
    setScore(scoreWhich());
  }, [winner]);

  const chooseRandom = () => {
    const choice = ["Rock", "Paper", "Scissors"];
    const rand = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return choice[rand(0, 2)];
  };

  const determineWinner = (p1, cpu) => {
    const cpuWin =
      (p1 === "Rock" && cpu === "Paper") ||
      (p1 === "Paper" && cpu === "Scissors") ||
      (p1 === "Scissors" && cpu === "Rock");
    const tie = p1 === cpu;
    if (p1 === null) {
      return null;
    } else return tie ? "Tie" : cpuWin ? "Computer" : "Player";
  };

  const scoreWhich = () => {
    if (winner === "Player") {
      let newArr = [...score];
      newArr[0] = newArr[0] + 1;
      return newArr;
    } else if (winner === "Computer") {
      let newArr = [...score];
      newArr[1] = newArr[1] + 1;
      return newArr;
    } else if (winner === null || "Tie") {
      return score;
    }
  };

  const handleClick = (e) => {
    setP1Choice(e.target.id);
  };

  return (
    <div>
      <Board
        score={score}
        p1Choice={p1Choice}
        cpuChoice={cpuChoice.current}
        winner={winner}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Game;
