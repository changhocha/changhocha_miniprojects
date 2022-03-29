import Game from "./components/Game";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <main>
      <div className="container">
        <Header title="가위 바위 보" />
        <Scoreboard />
        <Game />
      </div>
    </main>
  );
}

export default App;
