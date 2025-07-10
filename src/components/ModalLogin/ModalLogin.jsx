import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, onLogin, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setEmail(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal_form-label">
        Email
        <input
          className="modal_form-input"
          placeholder="Email"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={email}
          onChange={handleNameChange}
        ></input>
      </label>
      <label className="modal_form-label">
        Password
        <input
          className="modal_form-input"
          placeholder="Password"
          type="url"
          name="link"
          minLength="1"
          maxLength="300"
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>
    </ModalWithForm>
  );
};
