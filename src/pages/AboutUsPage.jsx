import React, { useState } from 'react';
import FeedbackbyPatient from '../components/infoCarts/FeedbackbyPatient';

// Reusable FAQ Item Component
const FAQItem = ({ id, question, answer, show, toggleShow }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`heading${id}`}>
      <button
        className={`accordion-button ${show ? "" : "collapsed"}`}
        type="button"
        onClick={() => toggleShow(id)}
        aria-expanded={show ? "true" : "false"}
        aria-controls={`collapse${id}`}
      >
        {question}
      </button>
    </h2>
    <div
      id={`collapse${id}`}
      className={`accordion-collapse collapse ${show ? "show" : ""}`}
      aria-labelledby={`heading${id}`}
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        {answer}
      </div>
    </div>
  </div>
);

// Reusable Values List Component
const ValuesList = ({ values }) => (
  <ul className="list-unstyled">
    {values.map((value, index) => (
      <li key={index}><i className="bi bi-check-circle text-success"></i> {value}</li>
    ))}
  </ul>
);

function AboutUsPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "What are your visiting hours?",
      answer: "Visiting hours are from 9:00 AM to 8:00 PM daily. Special permissions can be granted for emergencies.",
    },
    {
      id: 2,
      question: "Do you offer emergency services?",
      answer: "Yes, our emergency department operates 24/7 to handle any critical health issues.",
    },
    {
      id: 3,
      question: "How can I book an appointment?",
      answer: "You can book an appointment online through our website or by calling our customer support team at [Phone Number].",
    },
    {
      id: 4,
      question: "What insurance plans do you accept?",
      answer: "We accept a wide variety of insurance plans. Please contact our billing department for specific inquiries related to your insurance provider.",
    },
    {
      id: 5,
      question: "Do you have facilities for international patients?",
      answer: "Yes, we have special services for international patients, including language assistance and help with travel arrangements. Please contact us for more information.",
    },
  ];

  // Values Data
  const valuesData = [
    "Compassion",
    "Innovation",
    "Excellence",
    "Patient-centered care",
    "Integrity",
    "Collaboration",
    "Access to advanced medical technology",
    "Continuous improvement in healthcare practices",
    "Holistic and supportive environment",
    "Respect for individual needs and dignity",
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="display-4 text-primary">About Us</h1>
        <p className="lead text-muted">Dedicated to your health and care</p>
      </div>

      {/* Image and Mission Section */}
      <div className="row my-4">
        <div className="col-md-6 mb-4">
          <img
            src="/images/background/hospitalImg1.jpg" // Ensure correct path
            alt="Hospital"
            className="img-fluid rounded shadow"
          />
          <FeedbackbyPatient />
        </div>
        <div className="col-md-6">
          <h2 className="text-secondary">Our Mission</h2>
          <p>
            At [Hospital Name], we provide exceptional healthcare services with a focus on compassion, innovation, and excellence. Our state-of-the-art facilities and dedicated staff ensure that you receive the best care possible. We offer a wide range of medical specialties, from emergency care to advanced surgical procedures, all tailored to meet the unique needs of each patient. Our team of highly skilled doctors, nurses, and support staff work tirelessly to provide personalized treatment plans and the highest standards of care. We are committed to creating a healing environment where patients and their families feel supported every step of the way. Whether you're visiting for routine check-ups or more complex treatments, you can trust that you're in safe hands at [Hospital Name].
          </p>

          <h2 className="text-secondary mt-4">Our Values</h2>
          <ValuesList values={valuesData} />
        </div>
      </div>

      

      {/* FAQs Section */}
      <div className="my-5">
        <h2 className="text-center text-secondary">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqData.map(faq => (
            <FAQItem
              key={faq.id}
              {...faq}
              show={activeFAQ === faq.id}
              toggleShow={setActiveFAQ}
            />
          ))}
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
}

export default AboutUsPage;
