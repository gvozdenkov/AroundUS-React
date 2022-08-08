import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAvatarProfileClick,
  onAddCardClick,
  onDeleteConfirmShow,
  onCardClick,
}) {
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
              onClick={onAvatarProfileClick}
              style={{ backgroundImage: `url(${userAvatar})` }}
            ></div>
            <div className="profile__info">
              <div className="profile__info-row">
                <h1 className="profile__title">{userName}</h1>
                <button
                  className="profile__edit-btn"
                  onClick={onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">{userDescription}</p>
            </div>
          </div>
          <button
            className="profile__add-btn"
            onClick={onAddCardClick}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
