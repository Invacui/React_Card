import React from 'react';
import './Card.css';

function Card({ cardData, onSelect }) {
  const handleClick = () => {
    onSelect(cardData); // Pass the entire cardData object to onSelect
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cardData.image} alt={cardData.title} />
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </div>
  );
}

export default Card;

