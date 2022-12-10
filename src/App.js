import React, { useState, useEffect } from "react";
import "./App.css";
import SquareComponent from "./squareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setgameState] = useState(initialState);
  const [onXturn, updateXturn] = useState(true);
  const [result, setresult] = useState();

  const onclick = (stateno) => {
    const gamestate = Array.from(gameState);
    gamestate[stateno] = onXturn ? "X" : "0";
    setgameState(gamestate);
    updateXturn(!onXturn);
  };

  useEffect(() => {
    const result = calculateWinner();
    setresult(result);
  }, [gameState]);

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="App">
      <header className="header">
        <span>React Tic-Tac-Toe</span>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <SquareComponent
              state={gameState[0]}
              onClick={() => !gameState[0] && onclick(0)}
            />
            <SquareComponent
              state={gameState[1]}
              onClick={() => !gameState[1] && onclick(1)}
            />
            <SquareComponent
              state={gameState[2]}
              onClick={() => !gameState[2] && onclick(2)}
            />
          </div>
          <div className="row">
            <SquareComponent
              state={gameState[3]}
              onClick={() => !gameState[3] && onclick(3)}
            />
            <SquareComponent
              state={gameState[4]}
              onClick={() => !gameState[4] && onclick(4)}
            />
            <SquareComponent
              state={gameState[5]}
              onClick={() => !gameState[5] && onclick(5)}
            />
          </div>
          <div className="row">
            <SquareComponent
              state={gameState[6]}
              onClick={() => !gameState[6] && onclick(6)}
            />
            <SquareComponent
              state={gameState[7]}
              onClick={() => !gameState[7] && onclick(7)}
            />
            <SquareComponent
              state={gameState[8]}
              onClick={() => !gameState[8] && onclick(8)}
            />
          </div>
        </div>
      </section>
      <footer>
        <button
          onClick={() => {
            setgameState(initialState);
          }}
        >
          Play Again
        </button>
        <span>
          {result == null
            ? "Lets Play"
            : result === "Draw"
            ? `Draw`
            : `${result} is winner`}
        </span>
      </footer>
    </div>
  );
}

export default App;
