import React from "react";
import useCurrentUser from "../utils/useCurrentUser";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupImage from "./PopupImage";
import PopupWithForm from "./PopupWithForm";

function App() {
  const user = useCurrentUser();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isNewCardPopupOpen, setNewCardPopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setDeleteConfirmPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddCardClick() {
    setNewCardPopupOpen(true);
  }

  function handleDeleteConfirmShow() {
    setDeleteConfirmPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setNewCardPopupOpen(false);
    setDeleteConfirmPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={user}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAvatarProfileClick={handleEditAvatarClick}
          onAddCardClick={handleAddCardClick}
          onDeleteConfirmShow={handleDeleteConfirmShow}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Edit Profile"
          name="edit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              className="form__input form__input_type_name"
              type="text"
              name="name"
              id=""
              placeholder="Your name"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="form__error-msg"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input form__input_type_description"
              type="text"
              name="about"
              id=""
              placeholder="Description"
              required
              minLength="2"
              maxLength="100"
            />
            <span className="form__error-msg"></span>
          </label>
          <button
            type="submit"
            className="button form__button form__button_type_submit"
          >
            Save
          </button>
        </PopupWithForm>

        {/* Edit Avatar Popup */}
        <PopupWithForm
          title="Change profile image"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              className="form__input"
              type="url"
              name="avatar"
              placeholder="Avatar URL here"
              required
            />
            <span className="form__error-msg"></span>
          </label>
          <button
            type="submit"
            className="button form__button form__button_type_submit"
          >
            Save
          </button>
        </PopupWithForm>

        {/* New Card Popup */}
        <PopupWithForm
          title="New Place"
          name="new-place"
          isOpen={isNewCardPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input
              className="form__input"
              type="url"
              name="link"
              placeholder="Image URL here"
              required
            />
            <span className="form__error-msg"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input"
              type="text"
              name="name"
              placeholder="Image title here"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="form__error-msg"></span>
          </label>
          <button
            type="submit"
            className="button form__button form__button_type_submit"
          >
            Save
          </button>
        </PopupWithForm>

        {/* Delete card confirm popup */}
        <PopupWithForm
          title="Are you sure?"
          name="delete"
          isOpen={isDeleteConfirmPopupOpen}
          onClose={closeAllPopups}
        >
          <button
            type="submit"
            className="button form__button form__button_type_submit"
          >
            Yes
          </button>
        </PopupWithForm>

        <PopupImage card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
