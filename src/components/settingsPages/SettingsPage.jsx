// src/components/SettingsPage.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation alert
    Swal.fire({
      icon: "success",
      title: "Settings Saved",
      text: "Your settings have been updated successfully!",
      background: "#343a40",
      color: "#ffffff",
      confirmButtonColor: "#007bff",
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Notifications Toggle */}
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="notificationsToggle"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          <label className="form-check-label" htmlFor="notificationsToggle">
            Enable Notifications
          </label>
        </div>

        {/* Language Preference */}
        <div className="mb-3">
          <label htmlFor="languageSelect" className="form-label">
            Language
          </label>
          <select
            className="form-select"
            id="languageSelect"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Dark Mode Toggle */}
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            // Add functionality to handle dark mode here
          />
          <label className="form-check-label" htmlFor="darkModeToggle">
            Enable Dark Mode
          </label>
        </div>

        {/* Privacy Settings */}
        <div className="mb-3">
          <h5>Privacy Settings</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="dataSharingToggle"
            />
            <label className="form-check-label" htmlFor="dataSharingToggle">
              Allow Data Sharing with Third Parties
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="locationAccessToggle"
            />
            <label className="form-check-label" htmlFor="locationAccessToggle">
              Enable Location Access
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
