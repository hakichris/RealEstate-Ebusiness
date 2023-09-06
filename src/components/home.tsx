import React from 'react';
import Slider from 'react-slick';
import '../css/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image5 from './assets/image5.jpeg';
import image6 from './assets/image6.jpeg';
import image7 from './assets/image7.jpeg';
import image8 from './assets/image8.jpeg';



const Home: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the time between slides (in milliseconds)
  };

  return (
    <div>
      <Slider {...settings}>
      <div>
          <img src={image5} alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src={image6} alt="Image 2" className="slider-image"  />
        </div>
        <div>
          <img src={image7} alt="Image 3" className="slider-image" />
        </div>
        <div>
          <img src={image8} alt="Image 4" className="slider-image"  />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Home;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}
