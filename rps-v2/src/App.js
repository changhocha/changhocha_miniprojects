import "./App.css";
import Header from "./Components/Header";
import Game from "./Components/Game";

function App() {
  return (
    <main>
      <div className="container">
        <Header title="Rock Paper Scissors" />
        <Game />
      </div>
    </main>
  );
}

export default App;
