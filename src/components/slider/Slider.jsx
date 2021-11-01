import React from "react";
import "./slider.scss";
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";


const Slider = () => {
  const [sliderData, setSliderData] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/dummyData.json').then(res => setSliderData(res.data))
  }, [])
  console.log(sliderData)
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true, }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderData.map(slider => (
          <SwiperSlide>
          <div style={{background: "url" + `(${slider.img})`+"center no-repeat"}} className="banner">
            <div className="textContainer">
              <h1>{slider.title}</h1>
              <h4>Rating:</h4>
              <span className="rating">{slider.rating}</span>
              <p>
                {slider.plot}
              </p>
            </div>
          </div>
        </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="banner banner-1">
            <div className="textContainer">
              <h1>Superman: Man of Steel</h1>
              <h4>Rating:</h4>
              <span>7.5</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="banner banner-2">
            <div className="textContainer">
              <h1>Superman: Man of Steel</h1>
              <h4>Rating:</h4>
              <span>7.5</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="banner banner-3">
            <div className="textContainer">
              <h1>Superman: Man of Steel</h1>
              <h4>Rating:</h4>
              <span>7.5</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
