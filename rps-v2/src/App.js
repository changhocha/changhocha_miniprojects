import "./App.css";
import Header from "./Components/Header";
import Gameboard from "./Components/Gameboard";

function App() {
  return (
    <main>
      <div className="container">
        <Header title="Rock Paper Scissors" />
        <Gameboard />
      </div>
    </main>
  );
}

export default App;
