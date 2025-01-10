import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
  };

  const handleRegister = (e) => {
    navigate("/registration");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  return (
    <section
      className="vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#9A616D", borderRadius: "1rem" }}
    >
      <div className="container " style={{ maxWidth: "800px" }}>
        <div className="row d-flex justify-content-center align-items-center h-80">
          <div className="col col-xl-12">
            <div
              className="card"
              style={{ borderRadius: "1rem", backgroundColor: "#453f3f" }}
            >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-white">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 ">
                        <i
                          className="bi bi-gem me-1 text-primary"
                          style={{ color: "#ff6219", fontSize: "1.5rem" }}
                        ></i>
                        <span
                          className="h5 fw-bold mb-0"
                          style={{ color: "#ff6210" }}
                        >
                          STYLESPHERE
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form-control"
                          className="form-control form-control-lg bg-transparent "
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ fontSize: "0.875rem" }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form-control"
                          className="form-control form-control-lg bg-transparent "
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
                        >
                          LOGIN
                        </button>
                      </div>

                      <a className="small" href="#!" style={{ color: "#aaa" }}>
                        Forgot password?
                      </a>
                      <p className="mb-2 pb-lg-2">
                        Don't have an account?{" "}
                        <a
                          href="#!"
                          style={{ color: "#ff6219" }}
                          onClick={handleRegister}
                        >
                          Register here
                        </a>
                      </p>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="btn btn-danger w-100 mb-3"
                          onClick={handleGoogleLogin}
                          style={{
                            backgroundColor: "#db4437",
                            borderColor: "#db4437",
                            color: "#fff",
                          }}
                        >
                          <i className="bi bi-google me-2"></i> Login with
                          Google
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                          onClick={handleFacebookLogin}
                          style={{
                            backgroundColor: "#3b5998",
                            borderColor: "#3b5998",
                            color: "#fff",
                          }}
                        >
                          <i className="bi bi-facebook me-2"></i> Login with
                          Facebook
                        </button>
                      </div>
                      <div className="mt-1">
                        <a href="#!" className="small">
                          Terms of use.
                        </a>
                        <a href="#!" className="small">
                          Privacy policy
                        </a>
                      </div>
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
