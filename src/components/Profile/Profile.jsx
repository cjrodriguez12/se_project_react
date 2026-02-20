import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({
  onSelectCard,
  clothingItems,
  onCreateModal,
  currentUser,
  onEditProfileModal,
}) => {
  return (
    <section className="profile">
      <SideBar
        currentUser={currentUser}
        onEditProfileModal={onEditProfileModal}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </section>
  );
};
export default Profile;
