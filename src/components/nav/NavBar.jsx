import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Theme from "./Theme";

function NavBar({ title }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav
        className="navbar navbar-light border-bottom fixed-top"
        style={{ background: "#95d7ff" }}
      >
        <div className="container-fluid px-md-5 pe-lg-2">
          {/* Brand Name */}
          <span
            onClick={() => handleNavigation("/")}
            id="name"
            className="navbar-brand fw-bold pointer"
          >
            <strong>
              <i className="bi bi-heart-pulse me-1 text-primary"></i>
              {title}
            </strong>
          </span>

          {/* Right-Side Options */}
          <div className="ms-auto d-flex align-items-center">
            <Theme />
            
            {!isLoggedIn ? (
              <button
                onClick={() => handleNavigation("/login")}
                className={`btn btn-outline-primary me-2 ${
                  pathname === "/login" ? "active" : ""
                }`}
              >
                Login
              </button>
            ) : (
              <div
                className="d-flex align-items-center pointer"
                onClick={() => handleNavigation("/profile")}
              >
                <i className="bi bi-person-circle fs-4 text-primary me-2"></i>
                <span className="fw-bold">Profile</span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;


// 🚀 Now:
// - If logged out → Show Login button.
// - If logged in → Show Profile icon and name.
// - Click the Profile icon → Navigate to the profile page.

// Let me know if you want me to tweak anything else! ✌🏻
