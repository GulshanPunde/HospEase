import React from 'react'

function Emergency() {
  return (
    <div>
         <div className="row mt-5">
        <div className="col-md-12">
    <div
      className="card text-light border-0 shadow-lg"
      style={{
        backgroundImage: "linear-gradient(135deg,rgb(5, 125, 253),rgb(246, 191, 191))",
        borderRadius: "15px",
      }}
    >
      <div className="card-body text-center py-5">
        <h4 className="text-uppercase font-weight-bold mb-3">Emergency Contact</h4>
        <p className="mb-4" style={{ fontSize: "1.2rem" }}>
          Our dedicated team is ready to assist you at any time. Call us now:
        </p>
        <h2
          className="text-warning font-weight-bold mb-4"
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          }}
        >
          +1 800-555-1234
        </h2>
        <p className="mb-4">
          <i className="bi bi-clock-fill me-2"></i>Available 24/7, every day of the year.
        </p>
        <a
  href="tel:+18005551234"
  className="btn btn-warning btn-lg text-dark fw-bold rounded-pill px-5 py-2 shadow"
>
  Call Now
</a>

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Emergency