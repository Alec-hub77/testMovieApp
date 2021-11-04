import React from "react";
import "./header.scss";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleRemove = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div className="header">
      <div className={isScrolled ? "header scrolled" : "header"}>
        <div className="container">
          <div className="left">
            <img src={logo} alt="logo" />
            <Link to="#">Homepage</Link>
            <Link to="#">Series</Link>
            <Link to="#">Movies</Link>
            <Link to="#">New and Popular</Link>
            <Link to="#">My List</Link>
          </div>
          <div className="right">
            {user ? (
              <>
                <div>
                  Welcome{" "}
                  <span className="userName">{user.email.split("@")[0]}</span>
                </div>
                <button onClick={handleRemove}>Log Out</button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button>Log In</button>
                </Link>
                <Link to="/register">
                  <button>Sign up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
