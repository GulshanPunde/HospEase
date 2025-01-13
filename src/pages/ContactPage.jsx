import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Location from "../components/contact/Location";
import Emergency from "../components/contact/Emergency";

const ContactPage = () => {
  return (
    <div className=" text-light">
      <div className="container py-5">
        <h1 className="text-center mb-4">Get in Touch</h1>
        <p className="text-center mb-">
          We’re here to assist you. Contact us for any inquiries, appointments, or emergencies.
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <ContactForm />
          </div>
          <div className="col-md-6 mb-4">
            <Location />
          </div>
        </div>
       <Emergency/>
  
      </div>
    </div>
  );
};

export default ContactPage;
