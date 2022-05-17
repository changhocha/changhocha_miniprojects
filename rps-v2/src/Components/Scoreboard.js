import React from "react";

const Scoreboard = () => {
  return (
    <section className="scoreboard">
      <div className="scoreboard_header" aria-hidden="true">
        <p>All Time</p>
      </div>
      <div className="scoreboard_row" role="row">
        <div className="scoreboard_score center" role="cell" tabIndex="0">
          0
        </div>
        <div className="scoreboard_score center" role="cell" tabIndex="0">
          0
        </div>
      </div>
    </section>
  );
};

export default Scoreboard;
