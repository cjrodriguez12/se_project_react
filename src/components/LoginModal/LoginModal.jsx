import { useEffect, useState } from "react";
import LoginModalWithForm from "../LoginModal/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  onLogin,
  isOpen,
  onRegisterModal,
  errorMessage,
}) => {
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
  //error message handler () needs to be fixed to show error message in the modal

  const handleErrorMessage = () => {
    const errorMessage = errorMessage.error;
    if (!errorMessage) {
      return null;
    } else
      return errorMessage ? (
        <span className="modal__error">{errorMessage}</span>
      ) : (
        "Email or password is incorrect"
      );
  };
  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <LoginModalWithForm
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onRegisterModal={onRegisterModal}
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
      {handleErrorMessage()}
    </LoginModalWithForm>
  );
};
export default LoginModal;
