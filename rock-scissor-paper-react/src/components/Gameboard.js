import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const Gameboard = ({
  cbtitle,
  gbtitle,
  onClick,
  visP1Selected,
  visCPUSelected,
}) => {
  const visP1 = visP1Selected;
  const visCPU = visCPUSelected;

  return (
    <section id="playerBoard" className="playerBoard">
      <h2
        id="p1msg"
        className="center"
        aria-label="Player One Chooses"
        tabIndex="0"
      >
        {gbtitle}
      </h2>
      <div id="gameboard" className="gameboard">
        <div id="rock" className="gameboard__square">
          <img
            src="img/rock.png"
            alt="select rock"
            tabIndex="0"
            onClick={onClick("Rock")}
            style={{
              opacity: visP1.Rock ? "1" : "0",
              transition: "all 500ms",
            }}
          />
        </div>
        <div id="paper" className="gameboard__square">
          <img
            src="img/paper.png"
            alt="select paper"
            tabIndex="0"
            onClick={onClick("Paper")}
            style={{
              opacity: visP1.Paper ? "1" : "0",
              transition: "all 500ms",
            }}
          />
        </div>
        <div id="scissors" className="gameboard__square">
          <img
            src="img/scissors.png"
            alt="select scissors"
            tabIndex="0"
            onClick={onClick("Scissors")}
            style={{
              opacity: visP1.Scissors ? "1" : "0",
              transition: "all 500ms",
            }}
          />
        </div>
      </div>
      <section id="computerBoard" className="computerBoard">
        <h2 id="cpmsg" className="center" aria-label="Computer Chooses">
          {cbtitle}
        </h2>
        <div id="cp_gameboard" className="gameboard">
          <div id="cp_rock" className="gameboard__square">
            <img
              src="img/rock.png"
              alt="rock"
              style={{
                opacity: visCPU.Rock ? "1" : "0",
                transition: "all 50ms",
              }}
            />
          </div>
          <div id="cp_paper" className="gameboard__square">
            <img
              src="img/paper.png"
              alt="paper"
              style={{
                opacity: visCPU.Paper ? "1" : "0",
                transition: "all 50ms",
              }}
            />
          </div>
          <div id="cp_scissors" className="gameboard__square">
            <img
              src="img/scissors.png"
              alt="scissors"
              style={{
                opacity: visCPU.Scissors ? "1" : "0",
                transition: "all 50ms",
              }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

Gameboard.defaultProps = {
  gbtitle: "Player One Chooses...",
};

Gameboard.propTypes = {
  gbtitle: PropTypes.string.isRequired,
};

export default Gameboard;
