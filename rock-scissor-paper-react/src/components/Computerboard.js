import PropTypes from "prop-types";

const Computerboard = ({ cbtitle }) => {
  return (
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
  );
};

Computerboard.defaultProps = {
  cbtitle: "Computer Chooses...",
};

Computerboard.propTypes = {
  cbtitle: PropTypes.string.isRequired,
};

export default Computerboard;
