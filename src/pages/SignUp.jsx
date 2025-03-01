import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import "./login.css";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    // Basic validation
    if (!name || !age || !gender || !mobile || !email || !password || !confirmPassword) {
      setFormError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    const userData = { name, age, gender, mobile, email, password };
    dispatch(registerUser(userData)).then((result) => {
      if (registerUser.fulfilled.match(result)) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      }
    });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <section className="vh-100 d-flex align-items-center">
      <div className="container" style={{ maxWidth: "800px", padding: "20px" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card" style={{ borderRadius: "1rem", backgroundColor: "#453f3f", padding: "20px" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/images/background/hospitalImg1.jpg"
                    alt="register form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-3 text-white">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-heart-pulse me-2 text-danger" style={{ fontSize: "1.5rem" }}></i>
                        <span className="h5 fw-bold mb-0" style={{ color: "#ff6210" }}>HospEase</span>
                      </div>
                      <h5 className="fw-normal mb-3" style={{ letterSpacing: "1px" }}>Create your account</h5>
                      
                      {/* Success and error messages */}
                      {formError && <div className="alert alert-warning mb-3">{formError}</div>}
                      {error && <div className="alert alert-danger mb-3">{error}</div>}
                      {successMessage && <div className="alert alert-success mb-3">{successMessage}</div>}
                      
                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <input type="text" className="form-control bg-transparent text-white" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <input type="number" className="form-control bg-transparent text-white" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                      </div>
                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <select className="form-control bg-transparent text-dark" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <input type="tel" className="form-control bg-transparent text-white" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                      </div>
                      <div className="form-outline mb-3">
                        <input type="email" className="form-control bg-transparent text-white" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="row g-2 mb-3">
                        <div className="col-6">
                          <input type="password" className="form-control bg-transparent text-white" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <input type="password" className="form-control bg-transparent text-white" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                      </div>
                      <div className="pt-2 mb-3">
                        <button className="btn btn-lg btn-danger w-100" type="submit" id="registerbutton" style={{ fontSize: "0.9rem", fontWeight: "bold" }} disabled={loading}>
                          {loading ? "Registering..." : "REGISTER"}
                        </button>
                      </div>
                      <p className="mb-0">
                        Already have an account?{" "}
                        <a href="#" style={{ color: "#ff6219" }} onClick={handleLogin}>
                          Login here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
