import "./App.css";
import React from "react";
import TooltipCard from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="text">
          <p>
            All users to see number of songs in an album upon hovering over the
            Album card.
          </p>
        </div>
        <div className="card">
          <TooltipCard />
        </div>
      </div>
    </div>
  );
}

export default App;