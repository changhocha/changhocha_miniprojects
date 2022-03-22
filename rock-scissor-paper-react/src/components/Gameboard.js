import PropTypes from "prop-types";
import React from "react";

const Gameboard = ({ gbtitle, p1click, getp1Click }) => {
  const onClickRock = () => {
    getp1Click("p1Rock");
  };
  const onClickPaper = () => {
    getp1Click("p1Paper");
  };
  const onClickScissors = () => {
    getp1Click("p1Scissors");
  };
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
            onClick={onClickRock}
          />
        </div>
        <div id="paper" className="gameboard__square">
          <img
            src="img/paper.png"
            alt="select paper"
            tabIndex="0"
            onClick={onClickPaper}
          />
        </div>
        <div id="scissors" className="gameboard__square">
          <img
            src="img/scissors.png"
            alt="select scissors"
            tabIndex="0"
            onClick={onClickScissors}
          />
        </div>
      </div>
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
