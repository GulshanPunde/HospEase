import React from "react";

const Location = () => {
  return (
    <div className="pt-3">
      <h2 className="mb-3 ">Visit Our Hospital</h2>
      <p>
        We are centrally located and equipped to handle all your healthcare needs. Come visit us at:
      </p>
      <address className="mb-3">
        <strong>City Hospital</strong>
        <br />
        123 Health Drive
        <br />
        MedCity, State, ZIP Code
        <br />
        Phone: (123) 456-7890
      </address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093044!2d-122.4194164846816!3d37.774929279758056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cabcabc123%3A0xabcdabcdabcdabcd!2s123+Main+St%2C+San+Francisco%2C+CA+94105%2C+USA!5e0!3m2!1sen!2sus!4v1683754095801!5m2!1sen!2sus"
        width="100%"
        height="300"
        className="border rounded"
        allowFullScreen=""
        loading="lazy"
        title="Hospital Location"
      ></iframe>
    </div>
  );
};

export default Location;
