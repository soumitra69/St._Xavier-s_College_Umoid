import React, { useState } from 'react';

export default function Login({ onComingSoon, onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="portal-page-wrapper">
      {/* Top Navbar */}
      <div className="portal-top-header">
        <div
          className="portal-brand"
          onClick={() => onNavigate('home')}
          style={{ cursor: 'pointer' }}
        >
          <img src="./Assets/Logo 1.png" alt="Logo" />
          <div>
            <span className="portal-brand-sub">ST. XAVIER&apos;S</span>
            <span className="portal-brand-main">UMIOD</span>
          </div>
        </div>

        <nav className="portal-top-nav">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onComingSoon('About Us');
            }}
          >
            About
          </a>
          <a
            href="#academics"
            onClick={(e) => {
              e.preventDefault();
              onComingSoon('Academics');
            }}
          >
            Academics
          </a>
          <a
            href="#admission"
            onClick={(e) => {
              e.preventDefault();
              onComingSoon('Admission');
            }}
          >
            Admission
          </a>
          <a
            href="#campus"
            onClick={(e) => {
              e.preventDefault();
              onComingSoon('Campus Life');
            }}
          >
            Campus Life
          </a>
          <a
            href="#news"
            onClick={(e) => {
              e.preventDefault();
              onComingSoon('News');
            }}
          >
            News
          </a>
        </nav>

        <button
          type="button"
          className="portal-back-btn"
          onClick={() => onNavigate('home')}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Website
        </button>
      </div>

      {/* Main Login Card */}
      <main className="portal-login-main">
        <div className="portal-login-card">
          <div className="portal-login-header">
            <div className="portal-school-icon">
              <i className="fa-solid fa-Graduation-cap fa-graduation-cap"></i>
            </div>
            <h1>Student Portal</h1>
            <p>Welcome back, scholar.</p>
          </div>

          <form
            className="portal-login-form"
            onSubmit={(e) => {
              e.preventDefault();
              onNavigate('dashboard');
            }}
          >
            <div className="portal-field">
              <label>Student ID</label>
              <div className="portal-input-wrap">
                <span className="portal-input-icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input type="text" placeholder="Enter your ID" />
              </div>
            </div>

            <div className="portal-field">
              <label>Password</label>
              <div className="portal-input-wrap">
                <span className="portal-input-icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="portal-pwd-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                >
                  <i
                    className={
                      showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                    }
                  ></i>
                </button>
              </div>
            </div>

            <div className="portal-forgot-row">
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  onComingSoon('Forgot Password Recovery');
                }}
              >
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="portal-signin-btn">
              Sign In
            </button>
          </form>

          <div className="portal-divider">
            <span>OR</span>
          </div>

          <div className="portal-biometrics">
            <button
              type="button"
              onClick={() => onComingSoon('Face ID Login')}
              aria-label="Face ID"
            >
              <i className="fa-solid fa-face-smile"></i>
            </button>
            <button
              type="button"
              onClick={() => onComingSoon('Fingerprint Login')}
              aria-label="Fingerprint"
            >
              <i className="fa-solid fa-fingerprint"></i>
            </button>
          </div>

          <div className="portal-login-footer">
            <p>Don&apos;t have an account?</p>
            <button
              type="button"
              onClick={() => onComingSoon('Contact Registrar')}
            >
              Contact Registrar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
