import React from "react";

function AboutCompany({ title }) {
  return (
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-danger">
        <i className="bi bi-gem me-1 text-primary"></i>
        {title}
      </h6>
      <p>
        StyleSpare is a leading innovator in the textile industry, committed to
        providing high-quality fabrics and exceptional service.
      </p>
    </div>
  );
}

export default AboutCompany;
