import React from "react";
import Social from "./Social";
import Contact from "./Contact";
import CopyRight from "./CopyRight";
import AboutCompany from "./AboutCompany";
import Links from "./Links";
import ProductList from "./ProductList";

function Footer({ title }) {
  const footerStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the alpha (last value) for transparency
  };

  return (
    <div>
      <hr />
      <footer
        className="text-center text-lg-start text-light p-1"
        style={footerStyles}
      >
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <AboutCompany title={title} />
            <ProductList />
            <Links />
            <Contact />
          </div>
        </div>
      </footer>
      <Social />
        <CopyRight />
    </div>
  );
}

export default Footer;
