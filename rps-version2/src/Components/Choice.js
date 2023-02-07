import React from "react";

const Choice = ({ value, handleClick }) => {
  return (
    <button className={"Choice"} id={value} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Choice;
