import React from 'react';
import CartItem from './CartItem';

const InfoCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      description: 'High-quality item with great features. This product is designed to last and provide excellent performance in any setting.',
      price: 49.99,
      image: 'https://picsum.photos/500/300?random=1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Durable and reliable product. Perfect for everyday use and designed with convenience and ease in mind.',
      price: 29.99,
      image: 'https://picsum.photos/500/300?random=2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A must-have for your collection. This product brings both style and functionality into your home or office.',
      price: 19.99,
      image: 'https://picsum.photos/500/300?random=3',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Top-rated by customers. Features innovative design, reliability, and great value for money.',
      price: 39.99,
      image: 'https://picsum.photos/500/300?random=4',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default InfoCart;
