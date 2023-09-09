import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';
import image6 from './assets/image6.jpeg';
import image7 from './assets/image7.jpeg';
import image8 from './assets/image8.jpeg';


const Home: React.FC = () => {
  return (
    <div className="slide-container">
      <h1 className="heading-title1">House Galerie</h1>
      <Swiper
       modules={[EffectCoverflow, Pagination, Navigation]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="slide1" />
        </SwiperSlide>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FontAwesomeIcon name="arrow-back-outline" icon={faArrowLeft} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FontAwesomeIcon name="arrow-forward-outline" icon={faArrowRight} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
       
      </Swiper>
    </div>
  );
};

export default Home;
