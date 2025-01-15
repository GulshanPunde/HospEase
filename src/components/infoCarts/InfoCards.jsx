import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const InfoCards = () => {
  const services = useSelector((state) => state.services.services);

  return (
    <div className="container my-5">
      <div className="row">
        {services.length > 0 ? (
          services.map((service) => (
            <CardItem key={service.id} product={service} />
          ))
        ) : (
          <div className="text-center">No services available</div>
        )}
      </div>
    </div>
  );
};

export default InfoCards;
