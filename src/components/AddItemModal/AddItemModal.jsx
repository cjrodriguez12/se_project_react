import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setType] = useState("");
  const handleWeatherType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen === true) {
      setName("");
      setType("");
      setUrl("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
        Image
        <input
          className="modal_form-input"
          placeholder="Image URL"
          type="url"
          name="link"
          minLength="1"
          maxLength="300"
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>

      <div className="modal_radio">
        <p className="modal_radio-title">Select Weather Type:</p>
        <div className="modal_radio-input">
          <label>
            <input
              name="radio"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleWeatherType}
            />
            Hot
          </label>
        </div>
        <div className="modal_radio-input">
          <label>
            <input
              name="radio"
              type="radio"
              id="warm"
              value="warm"
              required
              onChange={handleWeatherType}
            />
            Warm
          </label>
        </div>
        <div className="modal_radio-input">
          <label>
            <input
              name="radio"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleWeatherType}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
