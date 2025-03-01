
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/userProfile/ProfileCard";
import OrderHistory from "../components/userProfile/OrderHistory";
import AccountSettings from "../components/userProfile/AccountSettings";
import EditProfileModal from "../components/userProfile/EditProfileModal";
import UserAddresses from "../components/userProfile/UserAddresses";
import UserProfileHeader from "../components/userProfile/UserProfileHeader";

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
          <UserAddresses />
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

// ✅ Layout updates:
// - Split into modular components
// - ProfileCard for user info and edit option
// - Order history, addresses, and settings on the right
// - Edit modal to update profile details
// Let me know if you want any more adjustments! 🚀
