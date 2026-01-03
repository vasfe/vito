'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface SwiperComponentProps {
  slides: { title: string; descripti3on: string }[];
}

const SwiperComponent = ({ slides }: SwiperComponentProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <h3>{slide.title}</h3>
          <p>{slide.descripti3on}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
