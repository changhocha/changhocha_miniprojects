import React, { useState } from "react";
import Gameboard from "./Gameboard";
import Playagain from "./Playagain";

const Game = () => {
  const [p1Click, setp1Click] = useState("");
  const [isSelected, setisSelected] = useState(false);
  const vis = {
    Rock: true,
    Paper: true,
    Scissors: true,
  };
  const [p1VisSelected, setP1VisSelected] = useState(vis);
  const [CPUVisSelected, setCPUVisSelected] = useState(vis);
  const [cbtitle, setCbtitle] = useState("CPU Chooses...");
  const [p1title, setP1title] = useState("You Chooses...");
  const [btnDisplay, setBtnDisplay] = useState("hidden");

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
    VisibleWhich(p1Selected, CPUchoice);
    countDown(result, CPUchoice);
    showP1Selected(p1Selected);
    console.log(result, p1Selected);
  };

  const VisibleWhich = (p1Selected, CPUchoice) => {
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
      setP1VisSelected(visRock);
    } else if (p1Selected === "Paper") {
      setP1VisSelected(visPaper);
    } else if (p1Selected === "Scissors") {
      setP1VisSelected(visScissors);
    }

    const computerChoosing = (CPUchoice) => {
      if (CPUchoice === "Rock") {
        setCPUVisSelected(visRock);
      } else if (CPUchoice === "Paper") {
        setCPUVisSelected(visPaper);
      } else if (CPUchoice === "Scissors") {
        setCPUVisSelected(visScissors);
      }
    };

    setTimeout(() => computerChoosing(CPUchoice), 3000);
  };

  const countDown = (result, CPUchoice) => {
    setCbtitle("3");
    setTimeout(() => setCbtitle("2"), 1000);
    setTimeout(() => setCbtitle("1"), 2000);
    setTimeout(() => setCbtitle(`CPU Chooses... ${CPUchoice}!`), 3000);

    if (result === "Tie") {
      setTimeout(() => setCbtitle("Tie Game!"), 5000);
    } else if (result === "Player") {
      setTimeout(() => setCbtitle("You Win!"), 5000);
    } else if (result === "Computer") {
      setTimeout(() => setCbtitle("Computer Win!"), 5000);
    }

    setTimeout(() => setBtnDisplay(""), 5500);
  };

  const showP1Selected = (p1Selected) => {
    if (p1Selected === "Rock") {
      setP1title("You Chooses... Rock!");
    } else if (p1Selected === "Paper") {
      setP1title("You Chooses... Paper!");
    } else if (p1Selected === "Scissors") {
      setP1title("You Chooses... Scissors!");
    }
  };

  return (
    <div>
      <Gameboard
        p1Click={p1Click}
        onClick={handleClick}
        gbtitle={p1title}
        cbtitle={cbtitle}
        visP1Selected={p1VisSelected}
        visCPUSelected={CPUVisSelected}
        isSelected={isSelected}
      />
      <Playagain display={btnDisplay} />
    </div>
  );
};

export default Game;
