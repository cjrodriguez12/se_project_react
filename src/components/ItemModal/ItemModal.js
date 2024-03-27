import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal_preview">
        <div className="modal_preview-content">
          <img
            className="modal_preview-image"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <div className="modal_preview-name">{selectedCard.name}</div>
        </div>
        <div className="modal_preview-weather">
          Weather: {selectedCard.weather}
        </div>
        <button
          className="modal_preview-close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};
export default ItemModal;
