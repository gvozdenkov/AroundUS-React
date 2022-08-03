import React from "react";

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__left">
            <div
              className="profile__image"
              onClick={props.onAvatarProfileClick}
            ></div>
            <div className="profile__info">
              <div className="profile__info-row">
                <h1 className="profile__title">Arty Gvozdenkov</h1>
                <button
                  className="profile__edit-btn"
                  onClick={props.onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">Explorer</p>
            </div>
          </div>
          <button
            className="profile__add-btn"
            onClick={props.onAddCardClick}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">{/* <!-- Cards render here --> */}</ul>
        </section>
      </main>

      {/* Image Popup */}
      <div className="popup popup_type_image">
        <div className="popup__content popup__content_type_image">
          <button className="popup__close-btn"></button>
          <img src="" alt="popup image" className="popup__image" />
          <p className="popup__caption">image caption</p>
        </div>
      </div>
      <template className="card-template">
        <li className="card">
          <div className="card__image-container">
            <img src="" alt="" className="card__image" />
          </div>
          <button className="card__delete-btn"></button>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-section">
              <span className="card__likes-count"></span>
              <button className="card__like-btn"></button>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default Main;
