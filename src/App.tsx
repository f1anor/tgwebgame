import React, { useEffect } from "react";
import "./App.css";

declare namespace TelegramGameProxy {
  function shareScore(): any;
  function receiveEvent(type: string, data: string): any;
  function shareScore(): any;
}

function App() {
  console.log(123123, TelegramGameProxy);
  const sendEvent = () => {
    console.log(1223);
    TelegramGameProxy.shareScore();
  };
  return (
    <div className="App">
      <h1>TG HTML5 GAME</h1>
      <button onClick={sendEvent}>Fullscreen</button>
    </div>
  );
}

export default App;
