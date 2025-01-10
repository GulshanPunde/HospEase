import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100 shadow"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px', // Rounded corners for a sleek look
          minHeight: '300px', // Increased height for more content
        }}
      >
        <div
          className="card-body d-flex flex-column"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
            backdropFilter: 'blur(5px)', // Subtle blur for background image
            borderRadius: '10px', // Match card border radius
            padding: '20px',
          }}
        >
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">{product.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">${product.price}</span>
            <button className="btn btn-danger btn-sm">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
