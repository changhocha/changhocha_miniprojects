import PropTypes from "prop-types";

const Gameboard = ({ gbtitle }) => {
  return (
    <section id="playerBoard" className="playerBoard">
      <h2
        id="p1msg"
        className="center"
        aria-label="Player One Chooses"
        tabindex="0"
      >
        {gbtitle}
      </h2>
      <div id="gameboard" className="gameboard">
        <div id="rock" className="gameboard__square">
          <img src="img/rock.png" alt="select rock" tabindex="0" />
        </div>
        <div id="paper" className="gameboard__square">
          <img src="img/paper.png" alt="select paper" tabindex="0" />
        </div>
        <div id="scissors" className="gameboard__square">
          <img src="img/scissors.png" alt="select scissors" tabindex="0" />
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
