import React from "react";

function PopupImage({ card, onClose }) {
  return (
    <div className={`popup ${card ? "popup_is-opened" : ""}`}>
      <div className="popup__content popup__content_type_image">
        <button className="popup__close-btn" onClick={onClose}></button>
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup__image"
        />
        <p className="popup__caption">{card ? card.name : ""}</p>
      </div>
    </div>
  );
}

export default PopupImage;
