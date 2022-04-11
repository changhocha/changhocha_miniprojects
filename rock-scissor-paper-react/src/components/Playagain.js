import React, { useState } from "react";

const Playagain = ({ display, onClick }) => {
  return (
    <button
      id="playAgain"
      type="submit"
      className={`playAgain ${display}`}
      onClick={onClick}
    >
      Play Again?
    </button>
  );
};

export default Playagain;
