import React from "react";

const Child = ({ number, onClick }) => {
  return (
    <div>
      <button onClick={onClick(number + 1)}>+1</button>
      <button onClick={onClick(number + 2)}>+2</button>
      <button onClick={onClick(number + 3)}>+3</button>
    </div>
  );
};

export default Child;
