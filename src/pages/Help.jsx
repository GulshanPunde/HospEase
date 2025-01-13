import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQList from "../components/infoCarts/FAQList";
import HelpHeroSection from "../components/infoCarts/HelpHeroSection";

const HelpPage = () => {
  
  return (
    <div className="container mt-5 text-white">
      <style>{`::placeholder { color: white !important; }`}</style>
      <div className="row">
        <div className="col">
          <h1>
            <i className="bi bi-question-circle"></i> Help & Support
          </h1>
          <p>
            Have questions? Need assistance? Find everything you need below.
          </p>
        </div>
      </div>

      <HelpHeroSection  />

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>
            <i className="bi bi-bed"></i> Hospital Bed Availability
          </h2>
          <div className="card  text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} >
            <div className="card-body">
             
                <>
                  <p className="card-text">
                    <strong>Total Beds:</strong>100
                    <br />
                    <strong>Occupied Beds:</strong> 80
                    <br />
                    <strong>Available Beds:</strong> 20
                  </p>
                  <p>
                    For inquiries or to request a bed, submit your question
                    below.
                  </p>
                </>
            
            </div>
          </div>
        </div>
        <FAQList />
      </div>

      {/* Additional sections like Contact Form can go here */}
    </div>
  );
};

export default HelpPage;
