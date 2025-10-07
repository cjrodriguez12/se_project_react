import { useEffect, useState } from "react";
import SignupModalWithForm from "../SignupModal/ModalWithForm";

const RegisterModal = ({ handleCloseModal, onLoginModal, onLogin, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password, name, imageUrl });
  };

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <SignupModalWithForm
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
    </SignupModalWithForm>
  );
};
export default RegisterModal;
