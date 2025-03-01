// Header.js
import React from "react";
import Swal from "sweetalert2";

const UserProfileHeader = ({ onLogout }) => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
      <h5 className="fw-bold text-dark">USER Profile</h5>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfileHeader;
