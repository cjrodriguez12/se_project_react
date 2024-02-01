import "../ModalWithForm/ModalWithForm.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <ul className="card">
      <li key={item.id}>
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
      </li>
      <div className="card_name">{item.name}</div>
    </ul>
  );
};
export default ItemCard;
