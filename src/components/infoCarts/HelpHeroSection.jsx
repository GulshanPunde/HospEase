import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HelpHeroSection = () => {
  return (
    <div className="help-hero-section text-white py-5 rounded " style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}} >
      <div className="container " >
        <div className="row align-items-center ">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold">
              We're Here to Help You
            </h1>
            <p className="lead">
              Find the care and resources you need, whether it's booking an appointment, locating a nearby hospital, or accessing emergency services.
            </p>
            <div className="mt-4">
              <a href="#request-help" className="btn btn-danger btn-lg m-3">
                <i className="bi bi-hand-heart-fill"></i> Request Help
              </a>
              <a href="#learn-more" className="btn btn-primary btn-lg m-3">
                <i className="bi bi-info-circle-fill"></i> Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src="D:\HospEase\hospEase\public\images\Othes\HelpingHand1.jpg"
              alt="Helping Hands"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpHeroSection;
