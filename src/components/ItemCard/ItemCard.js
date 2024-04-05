const ItemCard = ({ item, onSelectCard }) => {
  return (
    <ul className="card">
      <li>
        <img
          alt={item.name}
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
      </li>
      <div className="card_name">{item.name}</div>
    </ul>
  );
};
export default ItemCard;
