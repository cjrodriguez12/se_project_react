import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [type, setType] = useState("");
  const handleWeatherType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, type });
  };
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
          maxLength="30"
          value={link}
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
