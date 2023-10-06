import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SelectedCards from './components/Selected_Cards'; // Import the new component

import data from './data.json';

function App() {
  const [selectedCards, setSelectedCards] = useState("");

/*   const handleCardSelect = (cardData) => {
    // Store the selected card's title in the selectedCards state
    setSelectedCards([...selectedCards, cardData.title]);
  }; */

  return (
    <div className="App">
      <div className="card-list">
        <h1>Card App</h1>
        <CardList cards={data} onSelect={setSelectedCards} />
      </div>
      <SelectedCards selectedCards={selectedCards} /> {/* Render the SelectedCards component */}
    </div>
  );
}

export default App;
