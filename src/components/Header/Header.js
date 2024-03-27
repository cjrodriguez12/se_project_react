import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          {" "}
          <img src={logo} alt="logo" />{" "}
        </div>
        <div className="date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <h3 className="header__avatar-name">Charlie Rodriguez</h3>
        <div>
          <img src={avatar} className="header__avatar-img" alt="avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;
