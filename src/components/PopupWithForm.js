import React from "react";

function PopupWithForm(props) {
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTitle(props.title);
    setName(props.name);
    setOpen(props.isOpen);

    return () => {
      setOpen(false);
      console.log(`Popup <${name}> unmount`);
    };
  });

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ""}`}
    >
      <div className="popup__content">
        <button className="popup__close-btn" onClick={props.onClose}></button>
        <h3 className="popup__title">{title}</h3>
        <form action="" className="form" id={`${name}-form`} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
