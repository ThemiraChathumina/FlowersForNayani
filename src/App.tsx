import "./App.css";
import Flower from "./components/Flower/Flower";
import Night from "./components/night/night";

function App() {
  return (
    <div className="app-container">
      <Night />
      <div className="flower-container-1">
        <Flower />
      </div>
      <div className="flower-container-2">
        <Flower />
      </div>
      <div className="flower-container-3">
        <Flower />
      </div>
    </div>
  );
}

export default App;
