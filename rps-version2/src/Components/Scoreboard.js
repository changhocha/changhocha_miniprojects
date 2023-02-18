import React from "react";

const Scoreboard = ({ winner, alert }) => {
  const [playerWinCount, setPlayerWinCount] = React.useState(0);
  const [cpuWinCount, setCpuWinCount] = React.useState(0);
  React.useEffect(() => {
    if (winner === "Player") setPlayerWinCount(playerWinCount + 1);
    if (winner === "Computer") setCpuWinCount(cpuWinCount + 1);
  }, [winner]);

  return (
    <h2>
      player({playerWinCount}):CPU({cpuWinCount})
    </h2>
  );
};

export default Scoreboard;
