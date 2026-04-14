const ItemCard = ({ item, onSelectCard }) => {
  const isLiked = item.likes.some((id) => id === currentUser._id);
  handleCardLike = () => {
    onCardLike(item);
  };
  const handleCardDelete = () => {
    onCardDelete(item);
  };
  const itemLikeButtonClassName = `card_like-button ${isLiked && "card_like-button_active"}`;
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
