import React from "react";
import Choice from "./Choice";

const Gameboard = () => {
  return (
    <section className="playerBoard">
      <Choice choiceName={"rock"} />
      <Choice choiceName={"paper"} />
      <Choice choiceName={"scissors"} />
    </section>
  );
};

export default Gameboard;
