import React from "react";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getCardList().then((cardList) => {
      setCards(cardList);
    });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__left">
            <div
              className="profile__image"
              onClick={props.onAvatarProfileClick}
              style={{ backgroundImage: `url(${userAvatar})` }}
            ></div>
            <div className="profile__info">
              <div className="profile__info-row">
                <h1 className="profile__title">{userName}</h1>
                <button
                  className="profile__edit-btn"
                  onClick={props.onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">{userDescription}</p>
            </div>
          </div>
          <button
            className="profile__add-btn"
            onClick={props.onAddCardClick}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
              <li className="card">
                <div className="card__image-container">
                  <img src={card.link} alt="" className="card__image" />
                </div>
                <button className="card__delete-btn"></button>
                <div className="card__description">
                  <h2 className="card__title">{card.name}</h2>
                  <div className="card__like-section">
                    <span className="card__likes-count"></span>
                    <button className="card__like-btn"></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
