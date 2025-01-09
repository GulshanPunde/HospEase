// ChangePasswordModal.js
import React from 'react';
import PasswordForm from './PasswordForm';

const ChangePasswordModal = ({ show, onClose, onPasswordChange }) => (
  <div
    className={`modal fade ${show ? 'show' : ''}`}
    style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Semi-transparent dark background
    tabIndex="-1"
    aria-labelledby="changePasswordModalLabel"
    aria-hidden={!show}
    onClick={onClose}
  >
    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <div className="modal-header">
          <h5 className="modal-title" id="changePasswordModalLabel">Change Password</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <PasswordForm onSubmit={onPasswordChange} />
        </div>
      </div>
    </div>
  </div>
);

export default ChangePasswordModal;
