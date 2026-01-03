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
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
