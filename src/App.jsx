import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Memory Card Game</h1>
      <div className="game-notes">
        <p>Aim is to find the matching pair of cards in the grid.</p>
        <p>Click on the start button to begin.</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Start Game
        </button>
      </div>
      <Card />
    </>
  );
}

export default App;
