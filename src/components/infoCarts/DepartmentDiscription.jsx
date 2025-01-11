import React from "react";
import { useSelector } from "react-redux";

function DepartmentDiscription() {
  const departments = useSelector((state) => state.departments.departmentList);

  return (
    <div className="container ">
      <div className="accordion mt-5 " id="departmentAccordion">
        {departments.map((dept, index) => (
          <div key={dept.name} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {dept.name}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#departmentAccordion"
            >
              <div className="accordion-body">{dept.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentDiscription;
