import React from "react";

const CardItem = ({ product }) => {
  return (
    <div
      className="card h-100 shadow"
      style={{
        backgroundImage: `url(${product.image})`, // Dynamic background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px", // Smoother rounded corners
        minHeight: "250px", // Reduced height for better compactness
        overflow: "hidden", // Ensures content stays within bounds
      }}
    >
      <div
        className="card-body d-flex flex-column justify-content-between text-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly darker overlay
          color: "white",
          backdropFilter: "blur(8px)", // Enhanced blur effect
          borderRadius: "inherit", // Match card border radius
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Icon */}
        <i
          className={`${product.icon} display-3 mb-3`}
          style={{
            fontSize: "3rem", // Adjust icon size for better proportion
            color: "#ffc107",
          }}
        ></i>

        {/* Title */}
        <h5 className="card-title fw-bold mb-2">{product.title}</h5>

        {/* Description */}
        <p className="card-text mb-3" style={{ fontSize: "0.9rem" }}>
          {product.description}
        </p>

        {/* Optional Button */}
        <div className="mt-auto">
          <button
            className="btn btn-warning btn-sm"
            style={{ fontWeight: "bold", borderRadius: "20px" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
