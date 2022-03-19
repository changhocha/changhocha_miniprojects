import PropTypes from "prop-types";

const Computerboard = ({ cbtitle }) => {
  return (
    <section id="computerBoard" class="computerBoard">
      <h2 id="cpmsg" class="center" aria-label="Computer Chooses">
        {cbtitle}
      </h2>
      <div id="cp_gameboard" class="gameboard">
        <div id="cp_rock" class="gameboard__square">
          <img src="img/rock.png" alt="rock" />
        </div>
        <div id="cp_paper" class="gameboard__square">
          <img src="img/paper.png" alt="paper" />
        </div>
        <div id="cp_scissors" class="gameboard__square">
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
  gbtitle: PropTypes.string.isRequired,
};

export default Computerboard;
