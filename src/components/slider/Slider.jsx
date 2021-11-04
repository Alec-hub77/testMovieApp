import React from "react";
import "./slider.scss";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import dymmyData from '../../dummyData.json'

SwiperCore.use([Pagination, Autoplay])

const Slider = () => {
  const [sliderData, setSliderData] = React.useState([])
    console.log(sliderData)
  React.useEffect(() => {
    // axios.get('http://localhost:3000/dummyData.json').then(res => setSliderData(res.data))
    setSliderData(dymmyData)
  }, [])
  
  return (
    <div className="slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ enabled: true ,delay: 3000 }}
        pagination={{ clickable: true}}
      >
        {sliderData.map(slider => (
          <SwiperSlide key={slider.id}>
          <div style={{background: "url" + `(${slider.img})`+"center no-repeat"}} className="banner">
            <h1 className="welcome">Welcome to <span>Cinema Club</span></h1>
            <div className="textContainer">
              <h1>{slider.title}</h1>
              <h4>Rating:</h4>
              <span className="rating">{slider.rating}</span>
              <p>
                {slider.plot}
              </p>
            <Link to="/login"><button>Sign IN</button></Link>
            <Link to="/register"><button>Sign UP</button></Link>
            <Link to="/home"><button>Browse the site</button></Link>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
