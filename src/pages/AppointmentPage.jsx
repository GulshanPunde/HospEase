import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AppointmentPage = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [comments, setComments] = useState("");

  const departments = {
    Cardiology: ["Dr. Smith", "Dr. Johnson"],
    Neurology: ["Dr. Lee", "Dr. Davis"],
    Orthopedics: ["Dr. Brown", "Dr. Taylor"],
    Pediatrics: ["Dr. Wilson", "Dr. Martinez"],
    "General Medicine": ["Dr. Clark", "Dr. Lewis"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Confirm Appointment Request?",
      html: `
        <div style="text-align: left; font-size: 1rem; line-height: 1.6;">
          <p><i class="bi bi-person-circle"></i> <strong>Patient Name:</strong> ${patientName}</p>
          <p><i class="bi bi-envelope"></i> <strong>Email:</strong> ${patientEmail}</p>
          <p><i class="bi bi-building"></i> <strong>Department:</strong> ${department}</p>
          <p><i class="bi bi-person-badge"></i> <strong>Doctor:</strong> ${doctor}</p>
          <p><i class="bi bi-calendar-date"></i> <strong>Date:</strong> ${appointmentDate}</p>
          <p><i class="bi bi-clock"></i> <strong>Time:</strong> ${appointmentTime}</p>
          <p><i class="bi bi-heart-pulse"></i> <strong>Symptoms:</strong> ${symptoms || "N/A"}</p>
          <p><i class="bi bi-chat-left-text"></i> <strong>Comments:</strong> ${comments || "N/A"}</p>
        </div>
      `,
      icon: "info",
      iconColor: "#0dcaf0",
      showCancelButton: true,
      confirmButtonText: "Yes, Request it!",
      cancelButtonText: "Cancel",
      background: "#1f1f1f",
      color: "#f8f9fa",
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Appointment Requested!",
          text: "Your appointment request has been submitted. We will confirm it soon.",
          icon: "success",
          iconColor: "#198754",
          background: "#1f1f1f",
          color: "#f8f9fa",
          confirmButtonColor: "#0d6efd",
          timer: 3000,
          showConfirmButton: false,
        });

        // Clear the form fields after submission
        setPatientName("");
        setPatientEmail("");
        setDepartment("");
        setDoctor("");
        setAppointmentDate("");
        setAppointmentTime("");
        setSymptoms("");
        setComments("");
      }
    });
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#f8f9fa",
          border: "1px solid #343a40",
        }}
      >
        <div className="card-header bg-dark text-white text-center">
          <h2>
            <i className="bi bi-calendar-check"></i> Hospital Appointment Scheduler
          </h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Patient Info Section */}
              <div className="col-md-6">
                <h4 className="mb-3">
                  <i className="bi bi-person-fill"></i> Patient Details
                </h4>
                <div className="mb-3">
                  <label htmlFor="patientName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    id="patientName"
                    placeholder="Enter your full name"
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
                    className="form-control bg-dark text-white border-secondary"
                    id="patientEmail"
                    placeholder="Enter your email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="symptoms" className="form-label">
                    Symptoms (Optional)
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border-secondary"
                    id="symptoms"
                    rows="3"
                    placeholder="Describe your symptoms"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="comments" className="form-label">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border-secondary"
                    id="comments"
                    rows="2"
                    placeholder="Any special requests or notes?"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </div>
              </div>

              {/* Appointment Info Section */}
              <div className="col-md-6">
                <h4 className="mb-3">
                  <i className="bi bi-calendar-event"></i> Appointment Details
                </h4>

                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <select
                    className="form-select bg-dark text-white border-secondary"
                    id="department"
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      setDoctor("");
                    }}
                    required
                  >
                    <option value="">Choose a department...</option>
                    {Object.keys(departments).map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {department && (
                  <div className="mb-3">
                    <label htmlFor="doctor" className="form-label">
                      Select Doctor (OPD)
                    </label>
                    <select
                      className="form-select bg-dark text-white border-secondary"
                      id="doctor"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      required
                    >
                      <option value="">Choose a doctor...</option>
                      {departments[department].map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="form-control bg-dark text-white border-secondary"
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
                    className="form-control bg-dark text-white border-secondary"
                    id="appointmentTime"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg mt-3">
                <i className="bi bi-check-circle"></i> Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
