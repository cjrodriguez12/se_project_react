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
          <img src={require("../images/Logo.svg").default} alt="logo" />{" "}
        </div>
        <div className="date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img src="/images/avatar.svg" alt="avatar-logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
