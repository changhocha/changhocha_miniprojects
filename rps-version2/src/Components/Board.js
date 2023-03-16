import React, { useEffect, useReducer } from "react";
import Choice from "./Choice";
import Scoreboard from "./Scoreboard";
import Initbutton from "./Initbutton";
import { postReducer } from "../postReducer/postReducer";

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
  const [alert, dispatch] = useReducer(postReducer, null);
  const [attacker, attackerDis] = useReducer(postReducer, null);
  const winner = calculateWinner(p1Choice, cpuChoice);
  const isGameStarted = p1Choice !== null && cpuChoice !== null;
  const renLater = alert === true;

  useEffect(() => {
    if (alert === true) {
      dispatch({ type: "SET_ALERT", payload: false });
    } else if (isGameStarted) {
      attackerDis({ type: "SET_ATTACKER", payload: winner });
      const timeout = setTimeout(() => {
        dispatch({ type: "SET_ALERT", payload: true });
        return clearTimeout(timeout);
      }, 2000);
    }
  }, [p1Choice]);

  useEffect(() => {
    console.log(attacker);
  });

  return (
    <div className="board">
      <Scoreboard winner={winner} alert={alert} />
      <div className="cpuBoard">
        {" "}
        <div
          className="cpuChoice"
          id={
            isGameStarted && alert
              ? "openFront"
              : isGameStarted
              ? "flippingFront"
              : "closed"
          }
        >
          {renLater ? cpuChoice : null}
        </div>
        <div
          className="backCard"
          id={
            isGameStarted && alert
              ? "openBack"
              : isGameStarted
              ? "flippingBack"
              : "closed"
          }
        ></div>
      </div>

      <div className="middle">
        {" "}
        {isGameStarted && renLater && (
          <div>{winner === "Tie" ? "Tie Game" : winner + "Win!"}</div>
        )}
        <Initbutton alert={alert} handleinitclick={handleinitclick} />
      </div>

      <div className="p1Board">
        <Choice value="Rock" handleClick={handleClick} />
        <Choice value="Paper" handleClick={handleClick} />
        <Choice value="Scissors" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;
