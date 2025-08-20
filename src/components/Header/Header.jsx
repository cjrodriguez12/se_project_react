import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link, NavLink } from "react-router-dom";
const Header = ({ onCreateModal, location }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__link" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />

        <button className="header__button" type="text" onClick={onCreateModal}>
          + Add Clothes
        </button>

        <NavLink to="/profile" className="header__avatar-name">
          Charlie Rodriguez
        </NavLink>

        <img className="header__avatar-img" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};
export default Header;
