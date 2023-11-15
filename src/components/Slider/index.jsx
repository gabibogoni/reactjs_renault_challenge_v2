import image1 from '../../assets/images/image1.webp';
import image2 from '../../assets/images/image2.webp';
import image3 from '../../assets/images/image3.webp';

import './styles.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { register } from 'swiper/element/bundle';
register();

export const Slider = () => {
  const [sliderPerView, setSliderPerView] = useState(1);

  const images = [
    { id: '1', image: image1 },
    { id: '2', image: image2 },
    { id: '3', image: image3 },
  ];

  return (
    <div className="container">
      <Swiper slidesPerView={sliderPerView} pagination={{ clickable: true }} navigation>
        {images.map((item) => (
          <SwiperSlide key={item.id} color="red">
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
