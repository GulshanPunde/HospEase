import React, { useState } from 'react';

const HospitalTable = () => {
  const [departments] = useState([
    {
      id: 1,
      name: 'Cardiology',
      doctor: 'Dr. John Smith',
      totalBeds: 50,
      occupiedBeds: 30,
    },
    {
      id: 2,
      name: 'Neurology',
      doctor: 'Dr. Sarah Johnson',
      totalBeds: 40,
      occupiedBeds: 35,
    },
    {
      id: 3,
      name: 'Orthopedics',
      doctor: 'Dr. Emma Brown',
      totalBeds: 30,
      occupiedBeds: 25,
    },
    {
      id: 4,
      name: 'Pediatrics',
      doctor: 'Dr. Michael Lee',
      totalBeds: 20,
      occupiedBeds: 15,
    },
  ]);

  const handleAppointment = (department) => {
    alert(`Appointment booked for the ${department} department.`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Hospital Departments</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-primary text-center">
            <tr>
              <th>Department</th>
              <th>Doctor</th>
              <th>Total Beds</th>
              <th>Occupied Beds</th>
              <th>Available Beds</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.name}</td>
                <td>{dept.doctor}</td>
                <td>{dept.totalBeds}</td>
                <td>{dept.occupiedBeds}</td>
                <td>{dept.totalBeds - dept.occupiedBeds}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleAppointment(dept.name)}
                  >
                    Take Appointment
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

export default HospitalTable;
