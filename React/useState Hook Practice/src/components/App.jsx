import React, { useState } from "react";

function App() {
  // Call getTime to update the time every second
  setInterval(getTime, 1000);

  let currTime = new Date().toLocaleTimeString();
  const [time, getCurrTime] = useState(currTime);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    getCurrTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
