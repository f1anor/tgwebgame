import React, { useEffect } from "react";
import "./App.css";

declare namespace TelegramGameProxy {
  function shareScore(): any;
  function receiveEvent(type: string, data: string): any;
}

function App() {
  console.log(123123, TelegramGameProxy);
  const sendEvent = () => {
    TelegramGameProxy.receiveEvent("test1", "123123123");
  };
  return (
    <div className="App">
      <h1>TG HTML5 GAME</h1>
      <button onClick={sendEvent}>Fullscreen</button>
    </div>
  );
}

export default App;
