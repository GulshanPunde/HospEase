import React from "react";

const CardLayout = ({ children }) => {
  return (
    <div
      className="card"
      style={{ borderRadius: "1rem", backgroundColor: "#453f3f" }}
    >
      <div className="row g-0">
        <div className="col-md-6 col-lg-5 d-none d-md-block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="form"
            className="img-fluid"
            style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
          />
        </div>
        <div className="col-md-6 col-lg-7 d-flex align-items-center">
          <div className="card-body p-4 p-lg-5 text-white">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
