import Computerboard from "./components/Computerboard";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <body>
      <main>
        <div className="container">
          <Header title="가위 바위 보" />
          <Scoreboard />
          <Gameboard gbtitle="플레이어 1 선택" />
          <Computerboard cbtitle="컴퓨터 선택" />
        </div>
      </main>
    </body>
  );
}

export default App;
