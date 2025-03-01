import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(""); // State to handle form errors

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormError("Please fill in all fields");
      return;
    }
    setFormError(""); // Clear form error if fields are filled

    dispatch(loginUser({ email, password })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
        console.log("Login Successful");
      }
    });
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <section className="vh-100 d-flex align-items-center">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="row d-flex justify-content-center align-items-center h-80">
          <div className="col col-xl-12">
            <div
              className="card"
              style={{ borderRadius: "1rem", backgroundColor: "#453f3f" }}
            >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/images/background/hospitalImg1.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-white">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3">
                        <i
                          className="bi bi-heart-pulse me-1 text-danger"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                        <span
                          className="h5 fw-bold mb-0"
                          style={{ color: "#ff6210" }}
                        >
                          HospEase
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      {/* Error messages */}
                      {formError && (
                        <div className="alert alert-warning" role="alert">
                          {formError}
                        </div>
                      )}
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg bg-transparent"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ fontSize: "0.875rem" }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg bg-transparent"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={{ fontSize: "0.875rem" }}
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-lg btn-block"
                          type="submit"
                          id="loginbutton"
                          style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                          disabled={loading}
                        >
                          {loading ? "Logging in..." : "LOGIN"}
                        </button>
                      </div>

                      <a className="small" href="#" style={{ color: "#aaa" }}>
                        Forgot password?
                      </a>
                      <p className="mb-2 pb-lg-2">
                        Don't have an account?{" "}
                        <a
                          href="#"
                          style={{ color: "#ff6219" }}
                          onClick={handleRegister}
                        >
                          Register here
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

export default Login;
