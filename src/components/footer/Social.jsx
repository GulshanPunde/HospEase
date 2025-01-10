import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

function Social() {
  // Common styles for social icons
  const socialStyles = {
    color: "#ffffff",
    textDecoration: "none",
    margin: "0.5rem",
  };

  // Array of social media platforms
  const socialPlatforms = [
    { name: "Facebook", color: "#3b5998", icon: "bi-facebook", link: "#!" },
    { name: "Twitter", color: "#55acee", icon: "bi-twitter", link: "#!" },
    { name: "Google", color: "#dd4b39", icon: "bi-google", link: "#!" },
    { name: "Instagram", color: "#ac2bac", icon: "bi-instagram", link: "#!" },
    { name: "Linkedin", color: "#0082ca", icon: "bi-linkedin", link: "#!" },
    
  ];

  return (
    <footer
      className="text-center text-white pb-2"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Transparent background
        backdropFilter: "blur(10px)", // Optional blur effect
      }}
    >
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              className="btn text-white btn-floating social-icon"
              style={{ ...socialStyles, backgroundColor: platform.color }}
              href={platform.link}
              role="button"
              aria-label={platform.name}
            >
              <i className={`bi ${platform.icon}`}></i>
            </a>
          ))}
        </section>
      </div>

      {/* CSS for hover animation */}
      <style>
        {`
          .social-icon {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .social-icon:hover {
            transform: scale(1.2);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
        `}
      </style>
    </footer>
  );
}

export default Social;
