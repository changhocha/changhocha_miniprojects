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
  const [hovered, hoverDispatch] = useReducer(postReducer, ["", false]);
  const winner = calculateWinner(p1Choice, cpuChoice);
  const isGameStarted = p1Choice !== null && cpuChoice !== null;
  const renLater = alert === true;

  const handleHover = (e) => {
    const hoveredWhich = e.target.id;
    hoverDispatch({ type: "SET_HOVER", payload: [hoveredWhich, true] });
  };

  const handleLeave = () => {
    hoverDispatch({ type: "SET_HOVER", payload: ["", false] });
  };

  const classNames = (value) => {
    if (p1Choice === value) {
      return "clicked-" + value;
    } else if (isGameStarted && p1Choice != value) {
      return "hide-card";
    } else if (value === "Paper" && hovered[0] === "Rock") {
      return "moveAnim-Paper-left";
    } else if (value === "Paper" && hovered[0] === "Scissors") {
      return "moveAnim-Paper-right";
    } else if (hovered[0] === value && hovered[1]) {
      return "active";
    } else if (hovered[1]) {
      return "moveAnim-" + value;
    } else {
      return value;
    }
  };

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
        <Choice
          className={`choice ${classNames("Rock")}`}
          value="Rock"
          handleClick={handleClick}
          handleHover={handleHover}
          handleLeave={handleLeave}
        />
        <Choice
          className={`choice ${classNames("Paper")}`}
          value="Paper"
          handleClick={handleClick}
          handleHover={handleHover}
          handleLeave={handleLeave}
        />
        <Choice
          className={`choice ${classNames("Scissors")}`}
          value="Scissors"
          handleClick={handleClick}
          handleHover={handleHover}
          handleLeave={handleLeave}
        />
      </div>
    </div>
  );
};

export default Board;
