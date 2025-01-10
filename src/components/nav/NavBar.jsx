import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Theme from "./Theme";

function NavBar({ title, isLoggedIn }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {isLoggedIn ? (
        <nav className="navbar navbar-expand-lg navbar-light  border-bottom fixed-top" style={{background:"006BC0"}}>
          <div className="container-fluid px-md-5 pe-lg-2">
            {/* Brand Name */}
            <span
              onClick={() => handleNavigation("/")}
              id="name"
              className="navbar-brand fw-bold pointer"
            >
             <strong>{title}</strong> 
            </span>

            {/* Toggler Button for Collapsible Navbar */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Content */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Right-Side Options */}
              <div className="ms-auto d-flex align-items-center">
                <Theme />
                <button
                  onClick={() => handleNavigation("/login")}
                  className={`btn btn-outline-light me-2 ${
                    pathname === "/login" ? "active" : ""
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation("/signup")}
                  className={`btn btn-outline-light me-2 ${
                    pathname === "/signup" ? "active" : ""
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-light  border-bottom fixed-top " style={{background:"#95d7ff"}}>
          <div className="container-fluid px-md-5 pe-lg-2">
            {/* Brand Name */}
            <span
              onClick={() => handleNavigation("/")}
              id="name"
              className="navbar-brand fw-bold pointer"
            ><strong > {title}</strong>
              
            </span>

            {/* Right-Side Options */}
            <div className="ms-auto d-flex align-items-center">
              <Theme />
              <button
                onClick={() => handleNavigation("/login")}
                className={`btn btn-outline-primary me-2 ${
                  pathname === "/login" ? "active" : ""
                }`}
              >
                Login
              </button>
              <button
                  onClick={() => handleNavigation("/signup")}
                  className={`btn btn-outline-primary me-2 ${
                  pathname === "/signup" ? "active" : ""
              }`}
              >
              Sign Up
            </button>

            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
