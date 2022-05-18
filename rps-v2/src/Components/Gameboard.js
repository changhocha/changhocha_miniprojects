import React from "react";
import Choice from "./Choice";

const Gameboard = () => {
  return (
    <section className="gameboard">
      <section className="playerboard">
        <Choice className="choice" choiceName={"rock"} />
        <Choice className="choice" choiceName={"paper"} />
        <Choice className="choice" choiceName={"scissors"} />
      </section>
      <section className="cpuboard">
        <Choice className="choice" choiceName={"rock"} />
        <Choice className="choice" choiceName={"paper"} />
        <Choice className="choice" choiceName={"scissors"} />
      </section>
    </section>
  );
};

export default Gameboard;
