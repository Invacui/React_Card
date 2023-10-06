import React from 'react';

function SelectedCards({ selectedCards }) {
  return (
    <div className="selected-cards">
      <h2>Selected Cards</h2>
      <ul>
        {selectedCards.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedCards;
