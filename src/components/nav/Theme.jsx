import React from "react";
import { useNavigate } from "react-router-dom";

function Theme() {
  const navigate = useNavigate();
  const categories = ["Departments","Doctors","About Us", "Contact Us", "Help"];

  const handleNavigation = (category) => {
    switch (category) {
      case "Departments":
        navigate("/departments");
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
        case "Doctors":
          navigate("/department-doctors");
          break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown">
      <i
        className="bi bi-sliders fs-4 text-primary pointer me-3"
        id="themeDropdownIcon"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ cursor: "pointer" }}
      ></i>
      <ul className="dropdown-menu" >
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
