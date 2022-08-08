import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card" key={card._id}>
      <div className="card__image-container">
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleClick}
        />
      </div>
      <button className="card__delete-btn"></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-section">
          <span className="card__likes-count">{card.likes.length}</span>
          <button className="card__like-btn"></button>
        </div>
      </div>
    </li>
  );
}

export default Card;
