import "../Profile/Profile.css";
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
      <profileModalWithForm
        title="Sign Up"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onLoginModal={onLoginModal}
      >
        <label className="modal_form-label">
          Email
          <input
            className="modal_form-input"
            placeholder="Email"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label className="modal_form-label">
          Password
          <input
            className="modal_form-input"
            placeholder="Password"
            type="password"
            name="password"
            minLength="1"
            maxLength="300"
            value={password}
            onChange={handlePassChange}
          ></input>
        </label>
        <label className="modal_form-label">
          Name
          <input
            className="modal_form-input"
            placeholder="Name"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className="modal_form-label">
          Avatar URL
          <input
            className="modal_form-input"
            placeholder="Avatar URL"
            type="url"
            name="link"
            minLength="1"
            maxLength="300"
            value={imageUrl}
            onChange={handleUrlChange}
          ></input>
        </label>
      </profileModalWithForm>
    </section>
  );
};
export default SideBar;
