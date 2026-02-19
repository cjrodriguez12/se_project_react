import "../Profile/Profile.css";
import avatar from "../../images/avatar.svg";
import EditModal from "./editModal";

const SideBar = () => {
  return (
    <section className="profile__sidebar">
      <div className="profile__avatar">
        <div className="profile__avatar-name">Charlie Rodriguez</div>
        <button className="profile__avatar-edit">Edit profile</button>
        <EditModal />
        <img src={avatar} className="profile__avatar-img" alt="avatar" />
      </div>
    </section>
  );
};
export default SideBar;
