import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const InfoCards = () => {
  const services = useSelector((state) => state.services.services);

  return (
    <div className="container my-5">
      <div className="row flex-nowrap overflow-auto">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} className="col-8 col-sm-6 col-md-4">
              <CardItem product={service} />
            </div>
          ))
        ) : (
          <div className="text-center w-100">No services available</div>
        )}
      </div>
    </div>
  );
};

export default InfoCards;
