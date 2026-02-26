import "../Profile/Profile.css";

const SideBar = ({ currentUser, onEditProfileModal }) => {
  return (
    <section className="profile__sidebar">
      <div className="profile__avatar">
        <div className="profile__avatar-name">{currentUser.name}</div>
        <button className="profile__avatar-edit" onClick={onEditProfileModal}>
          Edit profile
        </button>

        <img
          src={currentUser.avatar}
          className="profile__avatar-img"
          alt="avatar"
        />
      </div>
    </section>
  );
};
export default SideBar;
