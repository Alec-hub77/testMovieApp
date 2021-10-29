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
                <button><Link to="/login">LOG IN</Link></button>
                <button>SING IN</button>
                <button><Link to="/home">BROWSE THE WEBSITE</Link></button>
            </div>
        </div>
    )
}

export default Welcome
