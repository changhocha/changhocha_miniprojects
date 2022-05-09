import React from "react";

const Choice = ({ choiceName }) => {
  return (
    <div className="choice">
      <img src={`img/${choiceName}.png`} alt="select rock" tabIndex="0" />
    </div>
  );
};

export default Choice;
