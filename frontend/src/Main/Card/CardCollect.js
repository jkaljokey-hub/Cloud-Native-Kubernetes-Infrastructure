import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import data from "./DataCard.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const CardCollect = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Virtual]}
      spaceBetween={20}
      slidesPerView={1.5}
      breakpoints={{
        
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card">
            <img src={item.img} alt={item.id} />
            <p className="p-card-Head">{item.title}</p>
            <p className="p-card-prce">
              from <span className="prs">{item.price}</span>
            </p>
            <hr style={{ margin: "3px" }} />
            <p className="p-card-Head">{item.text}</p>
            <p className="p-card-prce">
              Special Offer: <span className="prs">{item.priceSec}</span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCollect;
