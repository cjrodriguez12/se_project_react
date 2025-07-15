import { useEffect, useState } from "react";
import ModalWithForm from "../LoginModal/ModalWithForm";

const LoginModal = ({ handleCloseModal, onLogin, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassChange = (e) => {
    setPassword(e.target.value);
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
    </ModalWithForm>
  );
};
export default LoginModal;
