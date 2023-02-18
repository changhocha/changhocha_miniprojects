import React from "react";

const Initbutton = ({ alert, handleinitclick }) => {
  return (
    <div>
      {alert === true ? (
        <button onClick={handleinitclick}>Play Again?</button>
      ) : null}
    </div>
  );
};

export default Initbutton;
