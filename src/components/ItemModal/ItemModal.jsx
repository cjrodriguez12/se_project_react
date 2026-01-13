import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose, deleteCard, currentUser }) => {
  const isOwn = selectedCard.owner === currentUser._id;
  return (
    <div className={`modal`}>
      <div className="modal_preview">
        <div className="modal_preview-content">
          <img
            className="modal_preview-image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
          <div className="modal_preview-name">{selectedCard.name}</div>
        </div>
        <div className="modal_preview-weather">
          Weather: {selectedCard.weather}
          {isOwn && (
            <button
              className="modal_item-delete"
              type="button"
              onClick={deleteCard}
            >
              Delete Item
            </button>
          )}
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
