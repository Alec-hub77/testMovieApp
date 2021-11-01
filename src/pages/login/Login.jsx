import React from 'react';
import './login.scss';
import {Link, useHistory} from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';



const Login = () => {

  const user = {
    email: "intvw@mail.com",
    password: "aa@AA1",
    name: "intvw"
  }
  const [emailInput, setEmailInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')
  const [error, setError] = React.useState('')
  
  // console.log(JSON.parse(localStorage.getItem("user")))
  const errorHandler = () => {
    setError("Wrong email or password")
    setTimeout(() => {
      setError("")
    }, 2000)
  }
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(emailInput === user.email && passwordInput === user.password) {
      localStorage.setItem('user', JSON.stringify(user))
      history.push('/home')
    } else {
      errorHandler()
    }
  }
  
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
        { error ? <div style={{color: "red"}} className="errMessage">{error}</div> : null}
          <h1>Sign In</h1>
          <input 
          type="email" 
          placeholder="Email" 
          required
          name="userEmail"
          onChange={e => setEmailInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,20}$"
            required
            name="userPassword"
            onChange={e => setPasswordInput(e.target.value)}
          />
          <button className="loginBtn">Sign In</button>
          
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
