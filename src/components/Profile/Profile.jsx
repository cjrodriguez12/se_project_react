import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({ onSelectCard, initialClothes, onCreateModal }) => {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        initialClothes={initialClothes}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </section>
  );
};
export default Profile;
