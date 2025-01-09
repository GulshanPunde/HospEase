import React from "react";

const FormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        className="form-control form-control-lg bg-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ fontSize: "0.875rem" }}
      />
    </div>
  );
};

export default FormInput;
