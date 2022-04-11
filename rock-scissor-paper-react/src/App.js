import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <div className="container">
        <Header title="가위 바위 보" />
        <Game />
      </div>
    </main>
  );
}

export default App;
