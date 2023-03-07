import { React, useReducer, useEffect } from "react";
import { postReducer } from "../postReducer/postReducer";

const Scoreboard = ({ winner, alert }) => {
  const [playerWinCount, dispatchP1] = useReducer(postReducer, 0);
  const [cpuWinCount, dispatchCPU] = useReducer(postReducer, 0);
  useEffect(() => {
    if (winner === "Player") {
      dispatchP1({ type: "SET_WINCOUNT" });
    } else if (winner === "Computer") {
      dispatchCPU({ type: "SET_WINCOUNT" });
    }
  }, [alert]);

  return (
    <div>
      <div className="cpuScore">CPU({cpuWinCount})</div>
      <div className="p1Score">p1({playerWinCount})</div>
    </div>
  );
};

export default Scoreboard;
