import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  onSubmit,
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
          <button className="modal_submit" type="submit">
            Add Garment
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
