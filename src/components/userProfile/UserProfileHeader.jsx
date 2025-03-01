// Header.js
import React from 'react';

const UserProfileHeader = ({ onLogout }) => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold text-danger">USER Profile</h2>
    <button className="btn btn-danger" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserProfileHeader;
