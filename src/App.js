import "./App.css";
import ListOfPlayers from "./components/ListOfPlayers";


function App() {
  return (
    <div className="app-secret-santa">
      <div className="app-title-container">
        <h1 className="app-title">Secret Santa 🎅</h1>
      </div>
      <div className="list-info-players">
        <div className="info-players">
          <ListOfPlayers />
        </div>
      </div>
    </div>
  );
}

export default App;
 