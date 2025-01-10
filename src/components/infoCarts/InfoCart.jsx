import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6 mb-4">
      <div
        className="card h-100 shadow"
        style={{
          width: '100%', // Maintain uniform card width
          height: '500px', // Fixed height for all cards
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px', // Rounded corners for a sleek look
        }}
      >
        <div
          className="card-body d-flex flex-column"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
            height: '100%', // Overlay covers the card
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

const InfoCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      description: 'High-quality item with great features.',
      price: 49.99,
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Durable and reliable product.',
      price: 29.99,
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A must-have for your collection.',
      price: 19.99,
      image: 'https://picsum.photos/300/200?random=3',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Top-rated by customers.',
      price: 39.99,
      image: 'https://picsum.photos/300/200?random=4',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default InfoCart;
