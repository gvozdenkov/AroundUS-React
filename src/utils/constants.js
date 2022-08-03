export const formConfig = {
    formSelector: ".form",
    labelSelector: ".form__field",
    inputSelector: ".form__input",
    inputErrorSelector: ".form__error-msg",
    inputErrorClass: "form__input_type_error",
    messsageErrorClass: "form__error-msg_visible",
    submitButtonSelector: ".form__button_type_submit",
    inactiveButtonClass: "form__button_disabled",
  };
  
  export const profileConfig = {
    profileTitle: "profile__title",
    profileDescription: "profile__description",
    profileAvatar: "profile__image",
  };
  
  // Card template
  export const cardTemplateSelector = ".card-template";
  export const cardSelector = ".card";
  export const cardImageSelector = ".card__image";
  export const cardTitleSelector = ".card__title";
  export const cardDeleteBtnSelector = ".card__delete-btn";
  export const cardLikeSelector = ".card__like-btn";
  export const cardIsLikedClass = "card__like-btn_is-active";
  export const cardLikeCountSelector = "card__likes-count";
  
  export const cardListSelector = ".cards__list";
  
  // Popup
  export const popupIsOpenedClass = "popup_is-opened";
  export const popupSelector = ".popup";
  export const popupClass = "popup";
  export const popupCloseBtnClass = "popup__close-btn";
  export const ESC_KEY = "Escape";
  
  // PopupWithImage
  export const popupImageTypeSelector = ".popup_type_image";
  export const popupImageSelector = ".popup__image";
  export const popupCaptionSelector = ".popup__caption";
  
  // PopupWithForm
  export const popupEditProfileSelector = ".popup_type_edit";
  export const popupAddCardSelector = ".popup_type_new-card";
  export const popupAvatarSelector = ".popup_type_avatar";
  export const popupDeleteConfirmSelector = ".popup_type_delete";
  
  // Form
  export const formSelector = ".form";
  export const formInputSelector = ".form__input";
  
  // Dom Elements
  export const editProfileBtn = document.querySelector(".profile__edit-btn");
  export const addCardBtn = document.querySelector(".profile__add-btn");
  export const profileTitle = document.querySelector(".profile__title");
  export const profileDescription = document.querySelector(
    ".profile__description"
  );
  export const userNameSelector = ".profile__title";
  export const userDescriptionSelector = ".profile__description";