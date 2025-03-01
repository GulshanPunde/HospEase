// AppointmentHistory.js
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const AppointmentHistory = () => {
  const [filter, setFilter] = useState('all');

  const appointments = [
    { id: 1, number: 'APT12345', doctor: 'Dr. John Smith', date: 'Oct 20, 2024', time: '10:00 AM', status: 'Completed' },
    { id: 2, number: 'APT12346', doctor: 'Dr. Emily Johnson', date: 'Sep 10, 2024', time: '02:30 PM', status: 'Completed' },
    { id: 3, number: 'APT12347', doctor: 'Dr. David Brown', date: 'Oct 15, 2024', time: '11:15 AM', status: 'Cancelled' },
  ];

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status.toLowerCase() === filter;
  });

  const handleReschedule = (appointmentNumber) => {
    Swal.fire({
      title: 'Confirm Reschedule',
      text: `Are you sure you want to reschedule Appointment #${appointmentNumber}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reschedule it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Rescheduled',
          text: `Appointment #${appointmentNumber} has been successfully rescheduled!`,
          confirmButtonColor: '#007bff',
        });
      }
    });
  };

  return (
    <div className="card bg-dark text-light mb-3 shadow-sm border-0">
      <div className="card-body">
        <h4 className="card-title fw-bold mb-4">Appointment History</h4>

        {/* Filter Options */}
        <div className="mb-4">
          <label className="me-2">Filter by Status:</label>
          <select
            className="form-select form-select-sm bg-secondary text-light"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Appointments</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Appointments Table */}
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Appointment ID</th>
                <th scope="col">Doctor</th>
                <th scope="col">Status</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Appointment Time</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map(appointment => (
                <tr key={appointment.id}>
                  <td className="fw-semibold">#{appointment.number}</td>
                  <td><span className="badge bg-info text-dark">{appointment.doctor}</span></td>
                  <td>
                    {appointment.status === 'Completed' ? (
                      <span className="badge bg-success">Completed</span>
                    ) : (
                      <span className="badge bg-danger">Cancelled</span>
                    )}
                  </td>
                  <td className={appointment.status === 'Completed' ? 'text-info' : 'text-muted'}>
                    {appointment.status === 'Completed' ? appointment.date : 'N/A'}
                  </td>
                  <td className={appointment.status === 'Completed' ? 'text-info' : 'text-muted'}>
                    {appointment.status === 'Completed' ? appointment.time : 'N/A'}
                  </td>
                  <td>
                    {appointment.status === 'Completed' ? (
                      <button className="btn btn-primary btn-sm" onClick={() => handleReschedule(appointment.number)}>
                        Reschedule
                      </button>
                    ) : (
                      <button className="btn btn-danger btn-sm" disabled>
                        Cannot Reschedule
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
