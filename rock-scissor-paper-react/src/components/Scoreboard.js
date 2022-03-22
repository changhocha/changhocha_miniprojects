const Scoreboard = () => {
  return (
    <section className="scoreboard">
      <h2 className="offscreen">Scoreboard</h2>
      <section className="scoreboard__section">
        <h3 className="offscreen">All Time Scoreboard</h3>
        <div className="scoreboard__header" aria-hidden="true">
          <p>
            <abbr title="Player One">P1</abbr>
          </p>
          <p>All Time</p>
          <p>
            <abbr title="Computer Player">CP</abbr>
          </p>
        </div>
        <div className="scoreboard__row" role="row">
          <div
            id="p1_all_time_score"
            className="scoreboard__score center"
            role="cell"
            aria-label="Player One All Time Wins"
            tabIndex="0"
          >
            0
          </div>
          <div
            id="cp_all_time_score"
            className="scoreboard__score center"
            role="cell"
            aria-label="Computer Player All Time Wins"
            tabIndex="0"
          >
            0
          </div>
        </div>
      </section>
      <section id="session" className="scoreboard__section">
        <h3 className="offscreen">Session Scoreboard</h3>
        <div className="scoreboard__header" aria-hidden="true">
          <p>
            <abbr title="Player One">P1</abbr>
          </p>
          <p>Session</p>
          <p>
            <abbr title="Computer Player">CP</abbr>
          </p>
        </div>
        <div className="scoreboard__row" role="row">
          <div
            id="p1_session_score"
            className="scoreboard__score center"
            role="cell"
            aria-label="Player One Wins This Session"
            tabIndex="0"
          >
            0
          </div>
          <div
            id="cp_session_score"
            className="scoreboard__score center"
            role="cell"
            aria-label="Computer Player Wins This Session"
            tabIndex="0"
          >
            0
          </div>
        </div>
      </section>
    </section>
  );
};

export default Scoreboard;