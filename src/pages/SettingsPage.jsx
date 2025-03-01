import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AccountSettings from '../components/userProfile/AccountSettings';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [privacy, setPrivacy] = useState('public');

  const handleSaveChanges = () => {
    Swal.fire({
      title: 'Confirm Changes?',
      html: `
        <div style="text-align: left;">
          <p><i class="bi bi-bell"></i> <strong>Notifications:</strong> ${notifications ? 'Enabled' : 'Disabled'}</p>
          <p><i class="bi bi-shield-lock"></i> <strong>Privacy:</strong> ${privacy}</p>
          <p><i class="bi bi-moon"></i> <strong>Theme:</strong> ${darkMode ? 'Dark Mode' : 'Light Mode'}</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save it!',
      cancelButtonText: 'Cancel',
      background: darkMode ? '#1f1f1f' : '#ffffff',
      color: darkMode ? '#f8f9fa' : '#212529',
      iconColor: darkMode ? '#0dcaf0' : '#0d6efd',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Settings Saved!',
          text: 'Your preferences have been updated.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
          background: darkMode ? '#1f1f1f' : '#ffffff',
          color: darkMode ? '#f8f9fa' : '#212529',
        });
      }
    });
  };

  return (
    <div
      className={`container mt-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} p-4 rounded shadow-lg`}
      style={{ transition: '0.3s ease-in-out' }}
    >
      <h2 className="mb-4">
        <i className="bi bi-gear"></i> Settings
      </h2>

      <div className="mb-4">
        <h4>
          <i className="bi bi-bell"></i> Notifications
        </h4>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="notificationsToggle"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <label className="form-check-label" htmlFor="notificationsToggle">
            {notifications ? 'Enabled' : 'Disabled'}
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h4>
          <i className="bi bi-shield-lock"></i> Privacy Settings
        </h4>
        <select
          className={`form-select ${darkMode ? 'bg-dark text-white border-secondary' : 'bg-light text-dark border-secondary'}`}
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends-only">Friends Only</option>
        </select>
      </div>

      <div className="mb-4">
        <h4>
          <i className="bi bi-moon"></i> Theme
        </h4>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeToggle">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
        <div className="text-end">
        <button className="btn btn-primary" onClick={handleSaveChanges}>
          <i className="bi bi-save"></i> Save Changes
        </button>
      </div>
      </div>

      

      <AccountSettings />
    </div>
  );
}

export default SettingsPage;
