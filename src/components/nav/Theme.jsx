import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Theme() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  let categories = [
    "Departments",
    "Doctors",
    "About Us",
    "Contact Us",
    "Help",
  ];

  if (isLoggedIn) {
    categories = ["Appointments", ...categories, "Settings"];
  }

  const handleNavigation = (category) => {
    switch (category) {
      case "Appointments":
        navigate("/appointments");
        break;
      case "Departments":
        navigate("/departments");
        break;
      case "Doctors":
        navigate("/department-doctors");
        break;
      case "About Us":
        navigate("/about-us");
        break;
      case "Contact Us":
        navigate("/contact-us");
        break;
      case "Help":
        navigate("/help");
        break;
      case "Settings":
        navigate("/settings");
        break;
      default:
        break;
    }
  };

  return (
    <div className="btn-group dropstart">
      <i
        className="bi bi-sliders fs-4 text-primary pointer me-3"
        id="themeDropdownIcon"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ cursor: "pointer" }}
      ></i>
      <ul className="dropdown-menu">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleNavigation(category)}
            className="pointer"
          >
            <a href="#" className="dropdown-item">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Theme;

// ✅ Now:
// - "Appointments" appears at the top and "Settings" at the bottom when logged in.
// - Navigation is fully dynamic and intuitive.

// Let me know if this works better for you! 🚀
