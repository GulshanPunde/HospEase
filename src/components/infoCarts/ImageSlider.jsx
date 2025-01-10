import React from 'react';

const ImageSlider = () => {
  const images = [
       
    '/images/slider/slider1.jpg',
    '/images/slider/slider2.jpg',
    '/images/slider/slider3.jpg',
    '/images/slider/slider4.jpg',
    
    // '../public/images/slider/slider5.jpg',
    // '../public/images/slider/slider6.jpg',
  ];

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000" // Change images every 2 seconds
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '400px', // Fixed height
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
