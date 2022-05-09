import React from "react";
import Choice from "./Choice";

const Gameboard = () => {
  return (
    <section className="gameBoard">
      <section className="playerBoard">
        <Choice choiceName={"rock"} />
        <Choice choiceName={"paper"} />
        <Choice choiceName={"scissors"} />
      </section>
      <section className="cpuBoard">
        <Choice choiceName={"rock"} />
        <Choice choiceName={"paper"} />
        <Choice choiceName={"scissors"} />
      </section>
    </section>
  );
};

export default Gameboard;
