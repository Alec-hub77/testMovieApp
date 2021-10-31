import React from "react";
import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min";
import banner1 from "../../img/banner-1.jpg";
import banner2 from "../../img/banner-2.jpg";
import banner3 from "../../img/banner-3.png";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="banner-1">
            <div className="textContainer">
              <h1>Superman: Man of Steel</h1>
              <h4>Casts:</h4>
              <span>Henry Cavill (Justice League)</span>
              <span>Tom Welling (Smallville)</span>
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
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
