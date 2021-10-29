import React from 'react';
import './login.scss';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
            required
          />
          <button className="loginBtn">Log In</button>
          <span>
            New to Cinema Club ?{' '}
            <b>
              <Link to="/register">Sign up now.</Link>
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
