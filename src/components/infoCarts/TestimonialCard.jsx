import React from 'react';

const TestimonialCard = ({ imgSrc, name, role, testimonial, stars }) => (
  <div className="col-12">
    <div className="card shadow-lg w-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: 'none' }}>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={imgSrc}
            alt={`Patient ${name}`}
            className="rounded-circle me-3"
            style={{ width: '80px', height: '80px' }}
          />
          <div>
            <h5 className="card-title mb-0">{name}</h5>
            <p className="text-muted small">{role}</p>
          </div>
        </div>
        <p className="card-text">{testimonial}</p>
        <div className="text-warning">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`bi ${index < stars ? 'bi-star-fill' : 'bi-star'}`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
