// NotificationSettingsModal.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NotificationSettingsModal = ({ show, onClose }) => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSave = () => {
    // Logic to save notification settings
    console.log('Notification settings saved:', {
      emailNotifications,
      smsNotifications,
      pushNotifications,
    });

    // Display success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Settings Saved',
      text: 'Your notification settings have been updated successfully!',
      confirmButtonText: 'OK',
      background: '#343a40', // Dark background for the alert
      color: '#ffffff', // White text color
      confirmButtonColor: '#007bff', // Bootstrap primary color for the button
    });

    onClose(); // Close the modal after saving
  };

  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Semi-transparent dark background
      tabIndex="-1"
      aria-labelledby="notificationSettingsModalLabel"
      aria-hidden={!show}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="notificationSettingsModalLabel">Manage Notifications</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
              />
              <label className="form-check-label" htmlFor="emailNotifications">
                Email Notifications
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="smsNotifications"
                checked={smsNotifications}
                onChange={() => setSmsNotifications(!smsNotifications)}
              />
              <label className="form-check-label" htmlFor="smsNotifications">
                SMS Notifications
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="pushNotifications"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
              />
              <label className="form-check-label" htmlFor="pushNotifications">
                Push Notifications
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsModal;
