// ProfilePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import OrderHistory from "./OrderHistory";
import AccountSettings from "./AccountSettings";
import EditProfileModal from "./EditProfileModal";
import UserAddresses from "./UserAddresses";
import UserProfileHeader from "./UserProfileHeader";

const ProfilePage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A short bio about John Doe.",
    picture: "https://via.placeholder.com/150",
  });

  const handleEdit = (updatedProfile) => {
    setProfile(updatedProfile);
    setShowEditModal(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="container text-light" style={{ fontFamily: "Arial, sans-serif" }}>
      <UserProfileHeader onLogout={handleLogout} />
      <div className="row">
        <div className="col-md-4">
          <ProfileCard profile={profile} onEdit={() => setShowEditModal(true)} />
        </div>
        <div className="col-md-8">
          <OrderHistory />
          <UserAddresses/>
          <AccountSettings />
        </div>
      </div>
      {showEditModal && (
        <EditProfileModal
          profile={profile}
          onClose={() => setShowEditModal(false)}
          onSave={handleEdit}
        />
      )}
    </div>
  );
};
export default ProfilePage;
