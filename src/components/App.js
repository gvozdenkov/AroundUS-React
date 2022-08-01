import aroundLogo from "../images/logo.svg";

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          src={aroundLogo}
          alt="Around the US logo"
          className="header__logo"
        />
      </header>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__left">
            <div className="profile__image"></div>
            <div className="profile__info">
              <div className="profile__info-row">
                <h1 className="profile__title">Arty Gvozdenkov</h1>
                <button className="profile__edit-btn"></button>
              </div>
              <p className="profile__description">Explorer</p>
            </div>
          </div>
          <button className="profile__add-btn"></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
            {/* <!-- Cards render here --> */}
          </ul>
        </section>
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">© Arty Gvozdenkov 2022</p>
        <ul className="social-icons">
          <li>
            <a href="" className="icon icon_facebook"></a>
          </li>
          <li>
            <a href="" className="icon icon_instagram"></a>
          </li>
        </ul>
      </footer>
      {/* <!-- Edit Profile Popup --> */}
      <div className="popup popup_type_edit">
        <div className="popup__content">
          <button className="popup__close-btn"></button>
          <h3 className="popup__title">Edit Profile</h3>
          <form className="form" id="edit-form" noValidate>
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
          </form>
        </div>
      </div>
      {/* <!-- New Card Popup --> */}
      <div className="popup popup_type_new-card">
        <div className="popup__content">
          <button className="popup__close-btn"></button>
          <h3 className="popup__title">New Place</h3>
          <form action="" className="form" id="new-place-form" noValidate>
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
          </form>
        </div>
      </div>
      {/* <!-- Edit Avatar Popup --> */}
      <div className="popup popup_type_avatar">
        <div className="popup__content">
          <button className="popup__close-btn"></button>
          <h3 className="popup__title">Change profile image</h3>
          <form action="" className="form" id="avatar-form" noValidate>
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
          </form>
        </div>
      </div>
      {/* <!-- Delete confirm Popup --> */}
      <div className="popup popup_type_delete">
        <div className="popup__content">
          <button className="popup__close-btn"></button>
          <h3 className="popup__title">Are you sure?</h3>
          <form action="" className="form" id="delete-form" noValidate>
            <button
              type="submit"
              className="button form__button form__button_type_submit"
            >
              Yes
            </button>
          </form>
        </div>
      </div>
      {/* <!-- Image Popup --> */}
      <div className="popup popup_type_image">
        <div className="popup__content popup__content_type_image">
          <button className="popup__close-btn"></button>
          <img
            src=""
            alt="popup image"
            className="popup__image"
          />
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
    </div>
  );
}

export default App;
