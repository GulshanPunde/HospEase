import React from 'react';

const ProfileCard = ({ profile, onEdit }) => (
  <div className="card bg-dark text-light border border-primary text-center shadow-sm p-4">
    <div className="position-relative d-flex justify-content-center mb-3">
      <img
        src={profile.picture}
        alt="Profile"
        className="rounded-circle border border-primary shadow-lg"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
      />
    </div>
    <div>
      <h4 className="fw-bold mb-3 text-uppercase">{profile.name}</h4>
      
      {/* Bio styling */}
      <p className="text-light fst-italic mb-2" style={{  opacity: 0.85 }}>
        {profile.bio}
      </p>
      
      {/* Email styling */}
      <p
        className="fw-bold mb-4"
      >
        {profile.email}
      </p>
      
      <button
        className="btn btn-primary mt-3 px-4 w-100"
        onClick={onEdit}
      >
        Edit Profile
      </button>
    </div>
  </div>
);

export default ProfileCard;
