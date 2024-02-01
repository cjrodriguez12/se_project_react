import "./Header.css";
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
          <img src={require("../../images/Logo.svg").default} alt="logo" />{" "}
        </div>
        <div className="date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__button" type="text" onClick={onCreateModal}>
            + Add Clothes
          </button>
        </div>
        <h3 className="header__avatar-name">Charlie Rodriguez</h3>
        <div>
          <img src={require("../../images/avatar.svg").default} className="header__avatar-img" alt="avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;
