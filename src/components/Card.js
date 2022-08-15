import React, { useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-btn ${
    isOwn ? "card__delete-btn_visible" : "card__delete-btn_hidden"
  }`;

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
      <button className={cardDeleteButtonClassName}></button>
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
