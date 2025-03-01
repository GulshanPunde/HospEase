import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DepartmentsList() {
  const departments = useSelector((state) => state.departments.departmentList);
  const navigate = useNavigate();

  const handleNavigation = (departmentName) => {
    navigate(`/departments/${departmentName.toLowerCase()}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4 text-light">Departments</h6>
      {departments.map((dept, index) => (
        <p key={index}>
          <span
            role="button"
            tabIndex="0"
            className="text-reset"
            onClick={() => handleNavigation(dept.name)}
            onKeyPress={(e) => e.key === 'Enter' && handleNavigation(dept.name)}
            style={{ cursor: 'pointer' }}
          >
            {dept.name}
          </span>
        </p>
      ))}
    </div>
  );
}

export default DepartmentsList;
