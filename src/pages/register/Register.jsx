import React from "react";
import "./register.scss";
import { Link, useHistory } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import PasswordChecklist from "react-password-checklist";
import { useForm } from "react-hook-form";
import { useData } from '../../DataUserContext'

const Register = () => {
  const [password, setPassword] = React.useState("");
  const history = useHistory()
  
  const {data, setValues} = useData()
  
  const onSubmit = (data) => {
      history.push('/login')
      setValues(data)
  }
  const { register, handleSubmit} = useForm({
    defaultValues: {
      email: data.email,
      name: data.name,
    },
    mode: "onBlur",
  })

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <input 
          type="email" 
          placeholder="Email" 
          required 
          {...register("email")}
          name="email"
          />
          <input 
          type="text" 
          placeholder="Name" 
          required 
          {...register("name")}
          name="name"
          />
          <input
            type="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,20}$"
            required
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
           
            name="password"
          />
          <button className="loginBtn">Create an account</button>
          <PasswordChecklist
            className="PasswordChecklist"
            rules={["minLength", "specialChar", "number", "capital"]}
            minLength={6}
            value={password}
            onChange={(isValid) => {}}
          />
          <span>
            Already have an account?{" "}
            <b>
              <Link to="/login">Log in</Link>
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
          <Link className="goBack" to="/">
            <BsFillArrowLeftCircleFill color="white" />
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
