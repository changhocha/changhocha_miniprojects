import { React } from "react";

const Choice = ({
  value,
  handleClick,
  className,
  handleHover,
  handleLeave,
}) => {
  return (
    <div
      className={className}
      id={value}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {value}
    </div>
  );
};

export default Choice;
