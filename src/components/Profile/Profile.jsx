import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({ onSelectCard, clothingItems, onCreateModal }) => {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </section>
  );
};
export default Profile;
