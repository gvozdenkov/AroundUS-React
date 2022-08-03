import aroundLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__section">
      <img src={aroundLogo} alt="Around the US logo" className="header__logo" />
    </header>
  );
}

export default Header;
