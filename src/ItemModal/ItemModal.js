const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal_content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <img alt="" src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>weather type:{selectedCard.weather}</div>
      </div>
    </div>
  );
};
export default ItemModal;
