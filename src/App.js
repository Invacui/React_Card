import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SelectedCards from './components/Selected_Cards'; // Import the new component

import data from './data.json';

function App() {
  const [selectedCards, setSelectedCards] = useState(new Set());

    // Load selected cards from localStorage when the component mounts
    useEffect(() => {
      const storedSelectedCards = localStorage.getItem('Selections');
      if (storedSelectedCards) {
        setSelectedCards(new Set(JSON.parse(storedSelectedCards)));
      }
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    
  const handleCardSelect = (cardData) => {
    const dummyset = new Set(selectedCards); //Make a dummyset
    dummyset.add(cardData); //Update the dummy set to eliminate dups
    setSelectedCards(dummyset);
    console.log(Array.from(selectedCards));
  };

  useEffect(() => {
    localStorage.setItem('Selections', JSON.stringify([...selectedCards])); //setItem in localStorage
  }, [selectedCards]);


  return (
    <div className="App">
      <div className="card-list">
        <h1>Card App</h1>
        <CardList cards={data} onSelect={handleCardSelect} />
      </div>
      <SelectedCards selectedCards={Array.from(selectedCards)} /> {/* Render the SelectedCards component */}
    </div>
  );
}

export default App;
