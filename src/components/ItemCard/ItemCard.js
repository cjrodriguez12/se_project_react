import "../ModalWithForm/ModalWithForm.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <img src={item.link} className="card_image" onClick={()=>onSelectCard(item)} />
      </div>
      <div className="card_name">{item.name}</div>
    </div>
  );
};
export default ItemCard;