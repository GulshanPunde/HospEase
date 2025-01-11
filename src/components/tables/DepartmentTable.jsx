import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBedStatus } from "../../features/departments/deparmentSlice";

const DepartmentTable = () => {
  // Accessing departments from Redux state
  const departments = useSelector((state) => state.departments.departmentList);
  const dispatch = useDispatch();

  // Handle appointment booking and update bed status dynamically
  const handleAppointment = (departmentName) => {
    const selectedDepartment = departments.find(
      (dept) => dept.name === departmentName
    );

    if (selectedDepartment) {
      const { occupiedBeds, totalBeds } = selectedDepartment;
      if (occupiedBeds < totalBeds) {
        // Dispatch action to update bed status
        dispatch(
          updateBedStatus({
            departmentName,
            occupiedBeds: occupiedBeds + 1,
          })
        );
        alert(`Appointment booked for the ${departmentName} department.`);
      } else {
        alert("No available beds in this department.");
      }
    }
  };

  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4">Hospital Departments</h2>
      <div className="table-responsive ">
        <table className="table table-hover table-bordered ">
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
