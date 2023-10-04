import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  );
}

export default CardList;
