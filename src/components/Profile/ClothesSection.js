import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";

const ClothesSection = ({ onSelectCard, initialClothes }) => {
  return (
    <div className="profile__card_section">
      <div className="profile_title">Your Items:</div>
      <div className="profile__card_items">
        {initialClothes.map((item) => (
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};
export default ClothesSection;
