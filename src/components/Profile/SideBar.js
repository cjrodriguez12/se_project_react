import "./Profile.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <section className="profile__sidebar">
      <div className="profile__avatar">
        <div className="profile__avatar-name">Charlie Rodriguez</div>
        <>
          <img src={avatar} className="profile__avatar-img" alt="avatar" />
        </>
      </div>
    </section>
  );
};
export default SideBar;
