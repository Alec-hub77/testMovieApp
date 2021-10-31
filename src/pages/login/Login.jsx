import React, {useRef} from 'react';
import './login.scss';
import {Link, useHistory} from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { useData } from '../../DataUserContext';

const Login = () => {
  const user = {
    email: "intvw@mail.com",
    password: "aa@AA1",
    name: "intvw"
  }
  const { register, handleSubmit} = useForm({
    mode: "onBlur",
  })

  const {data, setValues} = useData()

  
  const history = useHistory()
  const onSubmit = (data) => {
    history.push('/home')
    setValues(data)
    localStorage.setItem('user', JSON.stringify(data))
  }
  
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <input 
          type="email" 
          placeholder="Email" 
          required
          name="userEmail"
          {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,20}$"
            required
            name="userPassword"
            {...register("password")}
          />
          <button className="loginBtn">Sign In</button>
          <div style={{color: "red"}} className="errMessage"></div>
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
          <Link className="goBack" to="/"><BsFillArrowLeftCircleFill color="white"/>Go Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
