
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from "../components/userProfile/ProfileCard";
import EditProfileModal from "../components/userProfile/EditProfileModal";
import UserAddresses from "../components/userProfile/UserAddresses";
import UserProfileHeader from "../components/userProfile/UserProfileHeader";
import AppointmentHistory from "../components/userProfile/AppointmentHistory";
import { logout } from "../features/auth/authSlice";
const ProfilePage = () => {
  
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A short bio about John Doe.",
    picture: "https://randomuser.me/api/portraits/men/7.jpg",
  });

  const handleEdit = (updatedProfile) => {
    setProfile(updatedProfile);
    setShowEditModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="container text-light" style={{ fontFamily: "Arial, sans-serif" }}>
      <UserProfileHeader onLogout={handleLogout} />
      <div className="row">
        <div className="col-md-4">
          <ProfileCard profile={profile} onEdit={() => setShowEditModal(true)} />
        </div>
        <div className="col-md-8">
          <AppointmentHistory/>
          <UserAddresses />
          {/* <AccountSettings /> */}
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


