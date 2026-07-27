import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "./ShareBouq.json"

const SwiperComponent = () => {
 
    return (
    <div className="SwiperComponentRoot">
        <div><p>SHARE THE #BOUQLOVE</p></div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1.5 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
      style={{ width: "100%",  paddingTop: "5px" }}
    >
      {data.map(( index) => (
        <SwiperSlide key={index.id}>
          <div className="SwiperComponent">

            <img src={index.img} alt="as" className="imgswiper" />


            <div className="overlay-text-swiper"> {index.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SwiperComponent;
