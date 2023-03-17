import React from "react";

const Choice = ({ value, handleClick, radio }) => {
  return (
    <label for={radio} className={"choice"} id={value} onClick={handleClick}>
      {value}
    </label>
  );
};

export default Choice;
