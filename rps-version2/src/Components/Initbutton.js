import React from "react";

const Initbutton = ({ alert, handleinitclick }) => {
  return (
    <div className="again-container">
      {alert === true ? (
        <div className="again" onClick={handleinitclick}>
          Play Again?
        </div>
      ) : null}
    </div>
  );
};

export default Initbutton;
