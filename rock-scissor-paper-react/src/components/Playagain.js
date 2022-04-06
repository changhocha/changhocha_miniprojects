import React, { useState } from "react";

const Playagain = (display) => {
  console.log(display);

  return (
    <button
      id="playAgain"
      type="submit"
      className={`playAgain ${display.display}`}
    >
      Play Again?
    </button>
  );
};

export default Playagain;
