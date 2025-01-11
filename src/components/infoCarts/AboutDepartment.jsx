import React from "react";
import { useSelector } from "react-redux";

function AboutDepartment() {
  // Accessing the department data from the Redux store
  const departments = useSelector((state) => state.departments.departmentList);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3 text-primary fw-bold">About Our Departments</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {departments.map((department, index) => (
          <div key={index} className="col">
            <div
              className="card h-100 shadow-lg border-0"
              style={{
                background: "linear-gradient(to bottom right,rgb(30, 43, 56),rgb(35, 107, 179))",
                color: "#f8f9fa",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              {/* Department Header */}
              <div
                className="card-header text-center text-white py-3"
                style={{
                  background: "linear-gradient(to right, #007bff,rgb(177, 154, 215))",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {department.name}
              </div>

              {/* Department Content */}
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={department.headDoctor.photo}
                    alt={department.headDoctor.name}
                    className="rounded-circle me-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border: "2px solid #f8f9fa",
                    }}
                  />
                  <div>
                    <h5 className="text-light mb-0">{department.headDoctor.name}</h5>
                    <p className=" mb-0">
                      <small>{department.headDoctor.specialization}</small>
                    </p>
                  </div>
                </div>

                <p className="fs-6 text-light">{department.description}</p>
                <table className="table table-dark table-bordered mt-3 text-center">
                  <thead>
                    <tr>
                      <th scope="col">Bed Type</th>
                      <th scope="col">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="bi bi-hospital me-2 text-primary"></i>
                        Total Beds
                      </td>
                      <td>{department.totalBeds}</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-bed-fill me-2 text-danger"></i>
                        Occupied Beds
                      </td>
                      <td>{department.occupiedBeds}</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="bi bi-bed me-2 text-success"></i>
                        Available Beds
                      </td>
                      <td>{department.availableBeds}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer Section */}
              <div
                className="card-footer text-center py-3"
                style={{
                  background: "linear-gradient(to right,rgb(149, 164, 230),rgb(43, 25, 232))",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                <i className="bi bi-person-circle me-2"></i>
                Department Excellence
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutDepartment;
