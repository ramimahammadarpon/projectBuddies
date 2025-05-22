import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from "./Slide";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Carousel = () => {
  const categories = use(categoriesPromise);
  console.log(categories);
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{clickable:true}}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {categories.map(category=> <SwiperSlide index={category.id} ><Slide category={category}></Slide></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Carousel;
