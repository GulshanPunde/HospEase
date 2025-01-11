import React from 'react';
import { useSelector } from 'react-redux';
import SingleCart from '../components/infoCarts/SingleCart';

const DepartmentDoctors = () => {
  const doctorsData = useSelector((state) => state.doctors); // Accessing the data from the store
  const departments = useSelector((state) => state.departments.departmentList); // Accessing department data

  return (
    <div className="container py-5 text-light">
      <h1 className="text-center text-primary fw-bold">Meet Our Doctors</h1>
      {doctorsData.map((department, index) => {
        const deptDetails = departments.find(
          (dept) => dept.name === department.department
        );

        return (
          <div key={index} className="mb-5">
            <h2 className="text-dark mb-4 border-bottom pb-2">
              {department.department}
            </h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {/* Doctors' Cards Section */}
              <div className="col-lg-8">
                <div className="row g-4">
                  {department.doctors.map((doctor, idx) => (
                    <div className="col" key={idx}>
                      <div className="card h-100 shadow-lg border-0 rounded-3 bg-transparent text-dark">
                        <img
                          src={doctor.photo}
                          className="card-img-top rounded-3"
                          alt={doctor.name}
                          style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center fw-bold text-primary">
                            {doctor.name}
                          </h5>
                          <p className="text-center">
                            <strong>Specialization:</strong>{' '}
                            {doctor.specialization}
                          </p>
                          <p className="card-text text-center">
                            {doctor.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SingleCart for Department Description */}
              <SingleCart
                title={deptDetails ? deptDetails.name : 'Unknown Department'}
                description={
                  deptDetails
                    ? deptDetails.description
                    : 'No description available.'
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentDoctors;
