import React from "react";
import InfoCart from "../components/infoCarts/InfoCart";
import HospitalTable from "../components/tables/HospitalTable";
import ImageSlider from "../components/infoCarts/ImageSlider";

function Home() {
  
  return (
    <div className="background-image">
      <div className="content">

        {/* <h1>Welcome to my page!</h1>
        <p>This is some content.</p> */}
        <ImageSlider/>
        <InfoCart/>
        <HospitalTable/>
      </div>
    </div>
  );
}
export default Home;
