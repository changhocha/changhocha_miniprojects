import React from "react";
import Choice from "./Choice";

const Gameboard = () => {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> e91d8504b6431243bf08f6bb02f9b8d4afe7e23b
      </section>
    </section>
  );
};

export default Gameboard;
