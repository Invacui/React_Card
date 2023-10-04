import React from "react";
import "./Card.css";

function Card({ cardData }) {
  return (
    <div className="card">
      <img src={cardData.image} alt={cardData.title} />
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </div>
  );
}

export default Card;
