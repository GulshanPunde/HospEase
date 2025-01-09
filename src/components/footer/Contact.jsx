import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  return (
    <div className="contact col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
      <p>
        <i className="bi bi-house-door-fill me-3" aria-hidden="true"></i>
        <span className="sr-only">Address:</span>
        Amla, Pin 460551, India
      </p>
      <p>
        <i className="bi bi-envelope-fill me-3" aria-hidden="true"></i>
        <span className="sr-only">Email:</span>
        support@gptextile.com
      </p>
      <p>
        <i className="bi bi-telephone-fill me-3" aria-hidden="true"></i>
        <span className="sr-only">Phone:</span>+ 91 9399535016
      </p>
      <p>
        <i className="bi bi-printer-fill me-3" aria-hidden="true"></i>
        <span className="sr-only">Fax:</span>+ 91 9171535016
      </p>
    </div>
  );
}

export default Contact;
