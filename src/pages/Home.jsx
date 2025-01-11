import React from "react";
import InfoCart from "../components/infoCarts/InfoCart";
import ImageSlider from "../components/infoCarts/ImageSlider";
import DepartmentTable from "../components/tables/DepartmentTable";
import DepartmentDiscription from "../components/infoCarts/DepartmentDiscription";

function Home() {
  
  return (
    <div >
      <div className="content">
        <ImageSlider/>
        <InfoCart/>
        <DepartmentTable/>
        <DepartmentDiscription/>
      </div>
    </div>
  );
}
export default Home;
