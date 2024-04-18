import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

const Profile = ({ onSelectCard, initialClothes }) => {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        initialClothes={initialClothes}
        onSelectCard={onSelectCard}
      />
    </section>
  );
};
export default Profile;
