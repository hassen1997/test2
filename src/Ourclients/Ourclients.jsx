'use client';
import React from 'react';
import './Ourclients.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import img9 from '../img/img9.png'
import img10 from '../img/img10.png'
import img11 from '../img/img11.png'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



function Ourclients() {
  return (
    <div className='Our-clients'>
      <h1>Our clients opinions</h1>
      <br/>
      <br/>

      <br/>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={img9} alt=''/></SwiperSlide>
        <SwiperSlide> <Image src={img10} alt=''/></SwiperSlide>
        <SwiperSlide><Image src={img11} alt=''/></SwiperSlide>
        <SwiperSlide><Image src={img9} alt=''/></SwiperSlide>
        <SwiperSlide><Image src={img10} alt=''/></SwiperSlide>
        <SwiperSlide><Image src={img11} alt=''/></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Ourclients;
