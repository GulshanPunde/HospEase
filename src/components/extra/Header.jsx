import React from "react";

const Header = ({ title }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <i
        className="bi bi-gem me-1 text-primary"
        style={{ color: "#ff6219", fontSize: "1.5rem" }}
      ></i>
      <span className="h5 fw-bold mb-0" style={{ color: "#ff6210" }}>
        STYLESPHERE
      </span>
      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
        {title}
      </h5>
    </div>
  );
};

export default Header;
