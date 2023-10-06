import React from 'react';
import Card from './Card';

function CardList({ cards , onSelect }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} cardData={card} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default CardList;
