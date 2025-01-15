import React from "react";

const CardItem = ({ product }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100 shadow"
        style={{
          backgroundImage: `url(${product.image})`, // Dynamic background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px", // Rounded corners
          minHeight: "300px", // Height adjustment
        }}
      >
        <div
          className="card-body d-flex flex-column text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent dark overlay
            color: "white", // Adjust text color for contrast
            backdropFilter: "blur(5px)", // Subtle blur for background
            borderRadius: "10px", // Match card border radius
            padding: "20px",
          }}
        >
          <i
            className={`${product.icon} display-3 mb-3`}
            style={{ fontSize: "50px", color: "#ffc107" }} // Icon color
          ></i>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          {/* <div className="mt-auto">
            <button className="btn btn-light btn-sm">Learn More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
