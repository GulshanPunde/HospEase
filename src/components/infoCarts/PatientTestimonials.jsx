import React from 'react';
import { useSelector } from 'react-redux';
import TestimonialCard from './TestimonialCard';

const PatientTestimonials = () => {
  // Fetch testimonials from the Redux store
  const testimonials = useSelector((state) => state.testimonials);

  return (
    <div className="container my-5">
      <div className="my-5">
        <h2 className="text-center text-secondary mb-4">What Our Patients Say</h2>
        <div id="patientTestimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="row g-4">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#patientTestimonialsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#patientTestimonialsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;
