import "./LoginModal.css";

const LoginModalWithForm = ({
  children,
  title,
  onClose,
  onSubmit,
  onRegisterModal,
  name = "form",
}) => {
  console.log("onRegisterModal function:", onRegisterModal);

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal_header">
          <button className="modal_button" type="button" onClick={onClose} />
          <h3 className="modal_title">{title}</h3>
        </div>
        <form onSubmit={onSubmit} className="modal_form">
          {children}
          <div className="modal_buttons">
            <button className="modal_submit" type="submit">
              Log In
            </button>
            <button
              className="modal_register-button"
              type="button"
              onClick={() => {
                console.log("Sign up button clicked!");
                onRegisterModal();
              }}
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModalWithForm;
