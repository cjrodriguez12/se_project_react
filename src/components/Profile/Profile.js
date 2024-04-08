import "./Profile.css";
//import React, { useContext, useState } from "react";
import avatar from "../../images/avatar.svg";
import ItemCard from "../ItemCard/ItemCard";

const Profile = ({ onSelectCard, initialClothes }) => {
  return (
    <section className="profile">
      <div className="profile__sidebar">
        <div className="profile__avatar">
          <div className="profile__avatar-name">Charlie Rodriguez</div>
          <>
            <img src={avatar} className="profile__avatar-img" alt="avatar" />
          </>
        </div>
      </div>
      <div className="profile__card_section">
        <div className="profile_title">Your Items:</div>
        <div className="profile__card_items">
          {initialClothes.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Profile;
