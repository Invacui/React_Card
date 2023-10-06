import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';

import data from './data.json';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (cardData) => {
    // Store the selected card's title in the selectedCards state
    setSelectedCards([...selectedCards, cardData.title]);
  };

  return (
    <div className="App">
      <div className="card-list">
        <h1>Card App</h1>
        <CardList cards={data} onSelect={handleCardSelect} />
      </div>
      <div className="selected-cards">
        <h2>Selected Cards</h2>
        <ul>
          {selectedCards.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
