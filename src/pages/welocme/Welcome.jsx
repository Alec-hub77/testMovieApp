import React from 'react'
import './welcome.scss';
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="imgContainer">
             <img src={logo} alt="" />

            </div>
            <div className="buttons__container">
               
                <h1>Welcome to Cinema Club</h1>
                <Link to="/login"><button>LOG IN</button></Link>
                <Link to="/register"><button>SIGN IN</button></Link>
                <Link to="/home"><button>BROWSE THE WEBSITE</button></Link>
            </div>
        </div>
    )
}

export default Welcome
