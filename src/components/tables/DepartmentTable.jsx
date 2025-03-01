import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateBedStatus } from "../../features/departments/deparmentSlice";

const DepartmentTable = () => {
  const departments = useSelector((state) => state.departments.departmentList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle appointment booking and navigation
  const handleAppointment = (departmentName) => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "Please log in to book an appointment!",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    const selectedDepartment = departments.find(
      (dept) => dept.name === departmentName
    );

    if (selectedDepartment) {
      const { occupiedBeds, totalBeds } = selectedDepartment;

      if (occupiedBeds < totalBeds) {
        Swal.fire({
          title: "Confirm Appointment",
          text: `Do you want to book an appointment in the ${departmentName} department?`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, Book It!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(
              updateBedStatus({
                departmentName,
                occupiedBeds: occupiedBeds + 1,
              })
            );

            Swal.fire({
              icon: "success",
              title: "Appointment Requested!",
              text: `Your appointment for the ${departmentName} department is requested.`,
            });

            navigate("/");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "No Beds Available",
          text: "Sorry, there are no available beds in this department.",
        });
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Hospital Departments</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-primary text-center">
            <tr>
              <th>Department</th>
              <th>Head Doctor</th>
              <th>Specialization</th>
              <th>Total Beds</th>
              <th>Occupied Beds</th>
              <th>Available Beds</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.name}>
                <td>{dept.name}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={dept.headDoctor.photo}
                      alt={dept.headDoctor.name}
                      className="rounded-circle me-2"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {dept.headDoctor.name}
                  </div>
                </td>
                <td>{dept.headDoctor.specialization}</td>
                <td>{dept.totalBeds}</td>
                <td>{dept.occupiedBeds}</td>
                <td>{dept.availableBeds}</td>
                <td className="text-center">
                  <button
                    className={`btn ${
                      dept.availableBeds > 0
                        ? "btn-outline-primary"
                        : "btn-outline-secondary disabled"
                    } btn-sm`}
                    onClick={() => handleAppointment(dept.name)}
                    disabled={dept.availableBeds <= 0}
                  >
                    {dept.availableBeds > 0
                      ? "Take Appointment"
                      : "No Beds Available"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentTable;
