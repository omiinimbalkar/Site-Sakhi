import React, { useState } from "react";
import './Login.css'; // custom styles
import Signup from './Signup';

const Login = ({ onLogin, onSwitchToSignup, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((res) => setTimeout(res, 1000));
      const userData = {
        name: email.split("@")[0].replace(/[^a-zA-Z]/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
        email
      };
      onLogin(userData);
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    const userData = {
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`,
    };
    onLogin(userData);
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="login-card card shadow-lg p-4 w-100" style={{ maxWidth: 450 }}>
        <button className="btn btn-link text-start px-0 mb-3" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Back to Home
        </button>

        <div className="text-center mb-4">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <div className="brand-icon d-flex align-items-center justify-content-center">
              <i className="bi bi-heart-fill text-white"></i>
            </div>
            <h4 className="mb-0 fw-bold">site-sakhi</h4>
          </div>
          <h5 className="fw-semibold">Welcome Back!</h5>
          <small className="text-muted">Sign in to continue building amazing websites</small>
        </div>

        <div className="mb-3">
          <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleSocialLogin("Google")}>
            <i className="bi bi-google me-2 text-danger"></i> Continue with Google
          </button>
          <button className="btn btn-outline-secondary w-100" onClick={() => handleSocialLogin("Facebook")}>
            <i className="bi bi-facebook me-2 text-primary"></i> Continue with Facebook
          </button>
        </div>

        <div className="position-relative my-3 text-center">
          <hr />
          <span className="position-absolute top-50 start-50 translate-middle px-2 bg-white text-muted small">or</span>
        </div>

        {error && (
          <div className="alert alert-danger d-flex align-items-center small py-2">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label small" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button className="btn btn-link btn-sm px-0">Forgot password?</button>
          </div>

          <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
            {isLoading && <span className="spinner-border spinner-border-sm me-2"></span>}
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account?{" "}
            <button className="btn btn-link btn-sm px-0" onClick={onSwitchToSignup}>
              <Signup/>
            </button>
          </small>
        </div>

        <div className="text-center small mt-3 text-muted border-top pt-3">
          <i className="bi bi-shield-lock-fill me-1"></i>
          Your data is protected with enterprise-grade encryption
        </div>
      </div>
    </div>
  );
};

export default Login;