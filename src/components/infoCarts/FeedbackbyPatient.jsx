import React from 'react';

const TestimonialCard = ({ imgSrc, name, role, testimonial, stars }) => (
  <div className="col-12">
    <div className="card shadow-lg w-100 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: 'none' }}>
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
              className={`bi ${index < stars ? 'bi-star-fill' : 'bi-star'} `}
            ></i>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function FeedbackbyPatient() {
    const testimonials = [
        {
          imgSrc: "https://randomuser.me/api/portraits/men/1.jpg", // Male image for Mary Johnson
          name: "Mary Johnson",
          role: "Forever Grateful Patient",
          testimonial: "The care I received at [Hospital Name] was truly life-changing...",
          stars: 4,
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/2.jpg", // Male image for James Brown
          name: "James Brown",
          role: "Heart Surgery Patient",
          testimonial: "Highly professional team! They not only saved my life...",
          stars: 5,
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/women/3.jpg", // Female image for Lisa Williams
          name: "Lisa Williams",
          role: "Mother of a Patient",
          testimonial: "The pediatric care my child received was exceptional...",
          stars: 4,
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/women/4.jpg", // Female image for Sarah Lee
          name: "Sarah Lee",
          role: "Orthopedic Patient",
          testimonial: "Thanks to the exceptional orthopedic team, I regained my mobility...",
          stars: 5,
        },
      ];

  return (
    <div className="container my-5">
      {/* What Our Patients Say */}
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
}

export default FeedbackbyPatient;
