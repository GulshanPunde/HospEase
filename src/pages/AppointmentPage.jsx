import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AppointmentPage = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., API call)
    alert("Appointment successfully scheduled!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="patientEmail" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="patientEmail"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Select Doctor
          </label>
          <select
            className="form-select"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">
            Appointment Date
          </label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">
            Appointment Time
          </label>
          <input
            type="time"
            className="form-control"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Schedule Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentPage;
