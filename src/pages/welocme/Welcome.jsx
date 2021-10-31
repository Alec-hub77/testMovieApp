import React from 'react'
import './welcome.scss';
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="welcome">
            <iframe className="youtubeVideo" width="1140" height="657" src="https://www.youtube.com/embed/TJFVV2L8GKs?controls=0&autoplay=1&mute=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className="coverScrin"></div>
            <div className="buttons__container">
               
                <h1>Welcome to Cinema Club</h1>
                <Link to="/login"><button>SIGN IN</button></Link>
                <Link to="/register"><button>SIGN UP</button></Link>
                <Link to="/home"><button>BROWSE THE WEBSITE</button></Link>
            </div>
        </div>
    )
}

export default Welcome
