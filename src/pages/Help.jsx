import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HelpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    sendCopy: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

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
    if (!formData.question) errors.question = "Question is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setSubmissionError("");
      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form data submitted:", formData);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", question: "", sendCopy: false });
      } catch (error) {
        setSubmissionError(
          "There was an error submitting the form. Please try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const darkModeStyles = {
    backgroundColor: "#343a40",
    color: "#ffffff",
    margin: "20px 0",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div className="container mt-5" style={{ color: "#ffffff" }}>
      <style>
        {`
          ::placeholder {
            color: white !important;
          }
        `}
      </style>
      <div className="row">
        <div className="col">
          <h1>
            <i className="bi bi-question-circle"></i> Help & Support
          </h1>
          <p>
            If you have any questions or need assistance, you can find the
            information below.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>
            <i className="bi bi-patch-question"></i> Frequently Asked Questions
          </h2>
          <div className="accordion" id="faqAccordion">
            <div className="card" style={darkModeStyles}>
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="bi bi-arrow-down-circle"></i> What is the
                    return policy?
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
                  Our return policy allows returns within 30 days of purchase
                  with a valid receipt.
                </div>
              </div>
            </div>
            <div className="card" style={darkModeStyles}>
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="bi bi-arrow-down-circle"></i> How do I track
                    my order?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
                  You can track your order using the tracking number provided in
                  your confirmation email.
                </div>
              </div>
            </div>
            <div className="card" style={darkModeStyles}>
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="bi bi-arrow-down-circle"></i> How do I contact
                    customer support?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
                  You can contact our customer support team via email at
                  support@example.com.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>
            <i className="bi bi-envelope"></i> Contact Information
          </h2>
          <div className="card" style={darkModeStyles}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-telephone"></i> Customer Support
              </h5>
              <p className="card-text">
                <i className="bi bi-envelope-fill"></i> Email:
                support@example.com
                <br />
                <i className="bi bi-telephone-fill"></i> Phone: (123) 456-7890
                <br />
                <i className="bi bi-geo-alt-fill"></i> Address: 1234 Example
                Street, City, State, 12345
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>
            <i className="bi bi-chat-dots"></i> Live Chat Support
          </h2>
          <div className="card" style={darkModeStyles}>
            <div className="card-body">
              <p>
                Click the button below to start a live chat with one of our
                support representatives.
              </p>
              <button className="btn btn-success w-100">
                <i className="bi bi-chat"></i> Start Live Chat
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>
            <i className="bi bi-question-circle"></i> Submit a Question
          </h2>
          <div className="card" style={darkModeStyles}>
            <div className="card-body">
              {formSubmitted && (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle"></i> Question submitted
                  successfully!
                </div>
              )}
              {submissionError && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-circle"></i> {submissionError}
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid #ced4da",
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
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid #ced4da",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={`form-control ${
                      formErrors.question ? "is-invalid" : ""
                    }`}
                    id="question"
                    name="question"
                    rows="4"
                    value={formData.question}
                    onChange={handleChange}
                    required
                    placeholder="Question"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid #ced4da",
                      margin: "10px 0",
                      padding: "10px",
                    }}
                  />
                  {formErrors.question && (
                    <div className="invalid-feedback">
                      {formErrors.question}
                    </div>
                  )}
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="sendCopy"
                    name="sendCopy"
                    checked={formData.sendCopy}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="sendCopy"
                    style={{ color: "white" }}
                  >
                    Send me a copy of my question
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
