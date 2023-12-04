// src/components/BackgroundCarousel.jsx
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://visualdisplaysltd.com/application/files/8115/7555/3795/Meeting_-_dnp_laserpanel_business_classic.jpg',
  'https://www.outthere.travel/wp-content/uploads/2020/06/135e001h_FIN.jpg',
  'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_a3f390649e.jpg',
];

const Carousel = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-screen h-screen brightness-50" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
 