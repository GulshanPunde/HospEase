import React from "react";

function AboutCompany({ title }) {
  return (
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-danger">
        <i className="bi bi-hospital me-1 text-primary"></i>
        {title}
      </h6>
      <p>
        Hospease is a modern solution for hospital bed management, offering
        efficient, reliable, and streamlined services to enhance patient care
        and hospital operations.
      </p>

      <h4>Bringing Life to Every Moment......</h4>
    </div>
  );
}

export default AboutCompany;
