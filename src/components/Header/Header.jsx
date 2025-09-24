import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({
  onCreateModal,
  location,
  onLoginModal,
  onRegisterModal,
  isLoggedIn,
}) => {
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

        {isLoggedIn && (
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        )}

        {isLoggedIn && (
          <NavLink to="/profile" className="header__avatar-name">
            Charlie Rodriguez
          </NavLink>
        )}
        {!isLoggedIn && (
          <div className="login_register_buttons">
            <button className="login_button" onClick={onLoginModal}>
              Log In
            </button>
            <button className="register_button" onClick={onRegisterModal}>
              Register
            </button>
          </div>
        )}
        {isLoggedIn && (
          <img className="header__avatar-img" src={avatar} alt="avatar" />
        )}
      </div>
    </header>
  );
};
export default Header;
