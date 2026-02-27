import EditModalWithForm from "./ModalwithForm";
import { useState, useEffect } from "react";

const EditModal = ({
  isOpen,
  handleCloseModal,
  currentUser,
  handleProfileEdit,
}) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileEdit({ name, imageUrl });
  };
  useEffect(() => {
    if (isOpen === true) {
      setName(currentUser.name);
      setUrl(currentUser.avatar);
    }
  }, [isOpen]);
  return (
    <EditModalWithForm
      title="Change Profile Data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      currentUser={currentUser}
    >
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
    </EditModalWithForm>
  );
};
export default EditModal;
