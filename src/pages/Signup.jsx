import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

export default function SignupPage({ onSignup, onSwitchToLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      return setError('Please fill all fields');
    }
    if (!email.includes('@')) {
      return setError('Invalid email');
    }

    setIsLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const userData = {
        name: email.split('@')[0],
        email,
      };
      onSignup(userData);
    } catch {
      setError('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow w-100" style={{ maxWidth: 400 }}>
        <h4 className="text-center mb-3">Sign Up</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account?{' '}
            <button className="btn btn-link p-0" onClick={onSwitchToLogin}>
              <Link to="/login">Login</Link>
            </button>
          </small>
        </div>

        <div className="text-center mt-2">
          <button className="btn btn-sm btn-link text-muted" onClick={onBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
