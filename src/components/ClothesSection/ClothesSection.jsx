import ItemCard from "../ItemCard/ItemCard";
import "../Profile/Profile.css";

const ClothesSection = ({ onSelectCard, clothingItems, onCreateModal }) => {
  return (
    <div className="profile__card_section">
      <div className="profile_title">
        Your Items:
        <button className="profile__button" type="text" onClick={onCreateModal}>
          + Add new
        </button>
      </div>
      <div className="profile__card_items">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};
export default ClothesSection;
