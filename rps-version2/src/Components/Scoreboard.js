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
    <h2>
      player({playerWinCount}):CPU({cpuWinCount})
    </h2>
  );
};

export default Scoreboard;
