import React from 'react';

const ImageSlider = () => {
  const slides = [
    {
      image: '/images/slider/slider1.jpg',
      caption: 'Compassionate Care for Every Patient',
    },
    {
      image: '/images/slider/slider2.jpg',
      caption: 'Advanced Technology for Better Outcomes',
    },
    {
      image: '/images/slider/slider3.jpg',
      caption: 'Your Health, Our Priority',
    },
    {
      image: '/images/slider/slider4.jpg',
      caption: 'Building a Healthier Community Together',
    },
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
        data-bs-interval="3000" // Change images every 4 seconds
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
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
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{
                position: 'relative',
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '400px', // Increased height for a grander look
                  objectFit: 'cover',
                  filter: 'brightness(90%)', // Dim background image for better text visibility
                }}
              />
              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))',
                }}
              ></div>

              {/* Text Overlay */}
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
                  zIndex: 2,
                  animation: 'fadeIn 2s', // Smooth fade-in animation
                }}
              >
                <h2
                  className="display-4 fw-bold"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '15px',
                  }}
                >
                  {slide.caption}
                </h2>
                <p
                  className="fs-5"
                  style={{
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  Dedicated to improving lives and advancing healthcare every day.
                </p>
              </div>
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
            style={{ filter: 'invert(1)' }}
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
            style={{ filter: 'invert(1)' }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
