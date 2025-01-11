import React from 'react';

function SingleCart({ title, description }) {
  return (
    <div className="col-lg-4">
      <div
        className="p-4 rounded shadow-lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <h3 className="mb-3 fw-bold">{title || 'Unknown Department'}</h3>
        <p className="fs-5 text-light">{description || 'No description available.'}</p>
      </div>
    </div>
  );
}

export default SingleCart;
