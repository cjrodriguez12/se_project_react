import "./SignupModal.css";

const SignupModalWithForm = ({
  children,
  title,
  handleModelChange,
  onSubmit,
  onClose,
  name = "form",
}) => {
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
              Sign Up
            </button>
            <button
              className="modal_login-button"
              type="button"
              onClick={handleModelChange}
            >
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupModalWithForm;
