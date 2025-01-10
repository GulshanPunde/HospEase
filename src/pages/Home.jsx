import React from "react";
import InfoCart from "../components/infoCarts/InfoCart";
import HospitalTable from "../components/tables/HospitalTable";
import ImageSlider from "../components/infoCarts/ImageSlider";

function Home() {
  
  return (
    <div >
      <div className="content">
        <ImageSlider/>
        <InfoCart/>
        <HospitalTable/>
      </div>
    </div>
  );
}
export default Home;
