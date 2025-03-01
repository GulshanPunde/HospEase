// EditProfileModal.js
import React, { useState } from 'react';

const EditProfileModal = ({ profile, onClose, onSave }) => {
  const [imagePreview, setImagePreview] = useState(profile.picture); // State for image preview
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    bio: profile.bio,
    picture: profile.picture,
  });

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        setFormData({ ...formData, picture: reader.result }); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.7)" }}>
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Edit Profile</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSave({ ...formData });
              }}
            >
              <div className="mb-3 text-center position-relative">
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="rounded-circle border border-primary mb-2"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <label htmlFor="fileInput" className="btn btn-primary position-absolute" 
                       style={{ bottom: "-10px", right: "10px" }}>
                  Edit
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-secondary text-light border border-light"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-secondary text-light border border-light"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  className="form-control bg-secondary text-light border border-light"
                  placeholder="Bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
