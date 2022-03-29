import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const Gameboard = ({ cbtitle, gbtitle, onClick, isSelected, visiable }) => {
  const vis = () => {
    const notSelected = {
      Rock: true,
      Paper: true,
      Scissors: true,
    };
    return isSelected ? visiable : notSelected;
  };

  const viscon = vis();

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
              display: viscon.Rock ? "block" : "none",
            }}
          />
        </div>
        <div id="paper" className="gameboard__square">
          <img
            src="img/paper.png"
            alt="select paper"
            tabIndex="0"
            onClick={onClick("Paper")}
            style={{ display: viscon.Paper ? "block" : "none" }}
          />
        </div>
        <div id="scissors" className="gameboard__square">
          <img
            src="img/scissors.png"
            alt="select scissors"
            tabIndex="0"
            onClick={onClick("Scissors")}
            style={{ display: viscon.Scissors ? "block" : "none" }}
          />
        </div>
      </div>
      <section id="computerBoard" className="computerBoard">
        <h2 id="cpmsg" className="center" aria-label="Computer Chooses">
          {cbtitle}
        </h2>
        <div id="cp_gameboard" className="gameboard">
          <div id="cp_rock" className="gameboard__square">
            <img src="img/rock.png" alt="rock" />
          </div>
          <div id="cp_paper" className="gameboard__square">
            <img src="img/paper.png" alt="paper" />
          </div>
          <div id="cp_scissors" className="gameboard__square">
            <img src="img/scissors.png" alt="scissors" />
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
