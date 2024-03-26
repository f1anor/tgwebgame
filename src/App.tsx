import React, { useEffect } from "react";
import "./App.css";

// const url = "https://mellow-florentine-74b2ce.netlify.app";

function App() {
  const handleFullscreen = () => {
    document.documentElement.requestFullscreen();
  };

  return (
    <div className="App">
      <h1>TG HTML5 GAME</h1>
      <button onClick={handleFullscreen}>Fullscreen</button>
    </div>
  );
}

export default App;
