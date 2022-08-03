import React from "react";

function PopupImage() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content popup__content_type_image">
        <button className="popup__close-btn"></button>
        <img src="" alt="popup image" className="popup__image" />
        <p className="popup__caption">image caption</p>
      </div>
    </div>
  );
}

export default PopupImage;
