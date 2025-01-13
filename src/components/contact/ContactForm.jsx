import React, { useState } from "react";
import Swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    sendCopy: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      Swal({
        title: "Message Sent",
        text: "Thank you for contacting us. We'll get back to you soon!",
        icon: "success",
        button: "OK",
        className: "sweetalert-dark",
      });
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        sendCopy: false,
      });
    } else {
      setFormErrors(errors);
      Swal({
        title: "Validation Errors",
        text: Object.values(errors).join("\n"),
        icon: "error",
        button: "OK",
        className: "sweetalert-dark",
      });
    }
  };

  return (
    <div className="container mt-3">
      <style>
        {`
          ::placeholder {
            color: white !important;
          }
          .sweetalert-dark .swal-modal {
            background-color: #343a40 !important;
            color: white;
          }
        `}
      </style>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 className="text-light">Contact Us</h2>
        {formSubmitted && (
          <div className="alert alert-success">Form submitted successfully!</div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #ced4da",
                color: "white",
                margin: "10px 0",
                padding: "10px",
              }}
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #ced4da",
                color: "white",
                margin: "10px 0",
                padding: "10px",
              }}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (Optional)"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #ced4da",
                color: "white",
                margin: "10px 0",
                padding: "10px",
              }}
            />
            {formErrors.phone && (
              <div className="invalid-feedback">{formErrors.phone}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (Optional)"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #ced4da",
                color: "white",
                margin: "10px 0",
                padding: "10px",
              }}
            />
          </div>
          <div className="form-group">
            <textarea
              className={`form-control ${formErrors.message ? "is-invalid" : ""}`}
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #ced4da",
                color: "white",
                margin: "10px 0",
                padding: "10px",
              }}
            />
            <div className="text-light text-end">
              {formData.message.length}/500 characters
            </div>
            {formErrors.message && (
              <div className="invalid-feedback">{formErrors.message}</div>
            )}
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="sendCopy">
              Send me a copy
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
