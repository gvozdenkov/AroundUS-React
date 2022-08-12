import React, { useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAvatarProfileClick,
  onAddCardClick,
  onDeleteConfirmShow,
  onCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

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
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            ></div>
            <div className="profile__info">
              <div className="profile__info-row">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  className="profile__edit-btn"
                  onClick={onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">{currentUser.about}</p>
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
