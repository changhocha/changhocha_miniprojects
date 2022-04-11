import React, { useState } from "react";

const Playagain = ({ display }) => {
  return (
    <button id="playAgain" type="submit" className={`playAgain ${display}`}>
      Play Again?
    </button>
  );
};

export default Playagain;
