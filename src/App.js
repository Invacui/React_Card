import React from "react";
import "./App.css";
import CardList from "./components/CardList";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>Card App</h1>
      <CardList cards={data} />
    </div>
  );
}

export default App;
