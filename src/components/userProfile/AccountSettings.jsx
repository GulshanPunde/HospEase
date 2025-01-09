// AccountSettings.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ChangePasswordModal from './ChangePasswordModal';
import NotificationSettingsModal from './NotificationSettingsModal';

const AccountSettings = () => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const handlePasswordChange = (currentPassword, newPassword) => {
    // Insert password change logic here
    Swal.fire({
      icon: 'success',
      title: 'Password Updated',
      text: 'Your password has been changed successfully!',
      confirmButtonText: 'OK',
      background: '#343a40', // Dark background for the alert
      color: '#ffffff', // White text color
      confirmButtonColor: '#007bff', // Bootstrap primary color for the button
    });
    setShowChangePasswordModal(false);
  };

  const toggleChangePasswordModal = () => setShowChangePasswordModal(!showChangePasswordModal);
  const toggleNotificationModal = () => setShowNotificationModal(!showNotificationModal);

  // Inline styles for dark mode
  const cardStyle = {
    backgroundColor: '#343a40', // Dark background
    color: '#ffffff', // Light text
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    color: '#ffffff',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const hoverStyle = {
    backgroundColor: 'red', // Light background on hover
    color: '#000', // Dark text on hover
  };

  return (
    <div className="card mb-3 shadow-sm" style={cardStyle}>
      <div className="card-body">
        <h4 className="card-title fw-bold">Account Settings</h4>
        
        <button
          className="btn btn-outline-light mb-2 me-2"
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={toggleChangePasswordModal}
        >
          Change Password
        </button>
        
        <button
          className="btn btn-outline-light mb-2 me-2"
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={toggleNotificationModal}
        >
          Manage Notifications
        </button>
      </div>

      <ChangePasswordModal
        show={showChangePasswordModal}
        onClose={toggleChangePasswordModal}
        onPasswordChange={handlePasswordChange}
      />
      <NotificationSettingsModal
        show={showNotificationModal}
        onClose={toggleNotificationModal}
      />
    </div>
  );
};

export default AccountSettings;
