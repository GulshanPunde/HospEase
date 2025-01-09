import React from "react";

const FormFooter = ({
  linkText,
  linkHref,
  linkOnClick,
  termsHref,
  privacyHref,
}) => {
  return (
    <div>
      <p className="mb-5 pb-lg-2">
        {linkText}{" "}
        <a href={linkHref} style={{ color: "#ff6219" }} onClick={linkOnClick}>
          {linkText}
        </a>
      </p>
      <a href={termsHref} className="small">
        Terms of use.
      </a>
      <a href={privacyHref} className="small">
        Privacy policy
      </a>
    </div>
  );
};

export default FormFooter;
