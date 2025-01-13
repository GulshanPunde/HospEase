import React from "react";
import ValuesList from "../components/infoCarts/ValuesList";
import PatientTestimonials from "../components/infoCarts/PatientTestimonials";
import { valuesData } from "../data/aboutUsData";

const AboutUsPage = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="display-4 text-primary">
          <strong>About Us</strong>
        </h1>
        <p className="lead text-muted">Dedicated to your health and care</p>
      </div>

      {/* Image and Mission Section */}
      <div className="row my-4">
        <div className="col-md-6 mb-4">
          <img
            src="/images/background/hospitalImg1.jpg"
            alt="Hospital"
            className="img-fluid rounded shadow"
          />
          <PatientTestimonials />
        </div>
        <div className="col-md-6">
          <h2 className="text-secondary">Our Mission</h2>
          <p>
            At [Hospital Name], we provide exceptional healthcare services with
            a focus on compassion, innovation, and excellence. Our
            state-of-the-art facilities and dedicated staff ensure that you
            receive the best care possible. Whether you're visiting for routine
            check-ups or complex treatments, you can trust that you're in safe
            hands.
          </p>
          <h2 className="text-secondary mt-4">Our Values</h2>
          <ValuesList values={valuesData} />
        </div>
      </div>

      {/* History Section */}
      <div className="my-5">
        <h2 className="text-primary text-center mb-4">Our History</h2>
        <p>
          Established in 1985, [Hospital Name] has grown from a small community
          clinic into one of the region's most trusted healthcare providers.
          Over the years, we have expanded our services and infrastructure to
          meet the evolving needs of our patients. Our journey has been marked
          by numerous milestones, including the addition of specialized
          departments, cutting-edge technology, and international
          accreditations.
        </p>
      </div>

      {/* Leadership Team Section */}
      <div className="my-5">
        <h2 className="text-primary text-center mb-4">Meet Our Leadership Team</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="CEO"
              className="img-fluid rounded-circle shadow"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 className="mt-3">Dr. Jane Smith</h5>
            <p className="text-muted">Chief Executive Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="CMO"
              className="img-fluid rounded-circle shadow"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 className="mt-3">Dr. John Doe</h5>
            <p className="text-muted">Chief Medical Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="CFO"
              className="img-fluid rounded-circle shadow"
              style={{ width: "150px", height: "150px" }}
            />
            <h5 className="mt-3">Emily Johnson</h5>
            <p className="text-muted">Chief Financial Officer</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="my-5">
        <h2 className="text-primary text-center mb-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>Emergency Care</h4>
            <p>Available 24/7 for all types of medical emergencies.</p>
          </div>
          <div className="col-md-4">
            <h4>Advanced Surgery</h4>
            <p>Equipped with modern operation theaters for complex surgeries.</p>
          </div>
          <div className="col-md-4">
            <h4>Rehabilitation</h4>
            <p>Comprehensive programs for physical and mental recovery.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center my-5">
        <a href="/appointments" className="btn btn-primary btn-lg">
          Book an Appointment
        </a>
      </div>
    </div>
  );
};

export default AboutUsPage;
