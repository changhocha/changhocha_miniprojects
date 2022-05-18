import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const handleClick = (countPlus) => () => {
    setNumber(countPlus);
  };

  return (
    <div>
      <p>Count : {number}</p>
      <Child number={number} onClick={handleClick}></Child>
    </div>
  );
};

export default Parent;
