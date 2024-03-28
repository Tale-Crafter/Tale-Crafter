import React, { useState } from 'react';
import '../../styles/login.css'
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend for authentication)
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <header>
        <img src="logo.png" alt="TALE Business logo" />
        <h1>Sign in to TALE Business</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
            <a href="#">Forgot?</a>
          </div>
        </form>
        <p>Don't have an account business? <a href="#">Sign up</a></p>
      </main>
      <footer>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </footer>
    </div>
  );
};

export default SignIn;
