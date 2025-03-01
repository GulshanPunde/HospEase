import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ServiceList() {
  const services = useSelector((state) => state.services.services);
  const navigate = useNavigate();

  const handleNavigation = (serviceTitle) => {
    navigate(`/services/${serviceTitle.toLowerCase().replace(/\s+/g, '-')}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-light">Services</h6>
      {services.map((service, index) => (
        <p key={index}>
          <span
            role="button"
            tabIndex="0"
            className="text-reset"
            onClick={() => handleNavigation(service.title)}
            onKeyPress={(e) => e.key === 'Enter' && handleNavigation(service.title)}
            style={{ cursor: 'pointer' }}
          >
            {service.title}
          </span>
        </p>
      ))}
    </div>
  );
}

export default ServiceList;
