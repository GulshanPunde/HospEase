// PasswordForm.js
import React, { useState } from 'react';

const PasswordForm = ({ onSubmit }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
    } else {
      setError('');
      onSubmit(currentPassword, newPassword);
    }
  };

  // Inline styles for dark mode
  const formStyle = {
    backgroundColor: '#343a40', // Dark background
    padding: '20px',
    borderRadius: '5px',
  };

  const labelStyle = {
    color: '#ffffff', // Light label color
  };

  const inputStyle = {
    backgroundColor: '#495057', // Darker input background
    color: '#ffffff', // Light text color
    border: '1px solid #ffffff', // White border for input
  };

  return (
    <form style={formStyle}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="currentPassword" className="form-label" style={labelStyle}>
          Current Password
        </label>
        <input
          type="password"
          className="form-control"
          id="currentPassword"
          style={inputStyle}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="newPassword" className="form-label" style={labelStyle}>
          New Password
        </label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          style={inputStyle}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label" style={labelStyle}>
          Confirm New Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          style={inputStyle}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </form>
  );
};

export default PasswordForm;
