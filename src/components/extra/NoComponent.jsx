import React from "react";
import { useNavigate } from "react-router-dom";
function NoComponent(props) {
  const navigate = useNavigate();
  const { text, btnTxt } = props;
  const handleHomeNavigation = () => {
    navigate("/");
  };
  return (
    <div className="text-white text-center my-5 mx-auto p-0 p-md-5 rounded">
      <h2>{text} </h2>
      <button
        className="btn btn-success btn-lg mt-3"
        onClick={handleHomeNavigation}
      >
        {btnTxt}
      </button>
    </div>
  );
}

export default NoComponent;
