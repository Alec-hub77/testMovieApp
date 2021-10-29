import React from 'react';
import './register.scss';
import {Link} from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <form>
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Name" required />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
            required
          />
          <button className="loginBtn">Create an account</button>
          <span>
            Already have an account?{' '}
            <b>
              <Link to="/login">Log in</Link>
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
          <Link className="goBack" to="/"><BsFillArrowLeftCircleFill color="white"/>Go Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
