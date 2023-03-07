import React from "react";

const Choice = ({ value, handleClick }) => {
  return (
    <div className={"choice"} id={value} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Choice;
