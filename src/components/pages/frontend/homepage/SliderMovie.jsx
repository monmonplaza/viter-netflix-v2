import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ChevronDown,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Play,
  Plus,
} from "lucide-react";
import { movies } from "../../backend/movies/datamovies";
const SliderMovie = ({ title, filter = "" }) => {
  const sliderRef = React.useRef();

  const getFilteredMovie = () =>
    movies.filter((item) => item.movie_category === filter);

  return (
    <>
      <section className="slider-parent bg-dark -mt-5  relative px-4 ">
        <h4 className="text-white mb-5">{title}</h4>
        <Swiper
          modules={[Pagination]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(it) => (sliderRef.current = it)}
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={6}
        >
          {getFilteredMovie().map((item, key) => (
            <SwiperSlide key={key}>
              <div className="slider-card translate-y-5 group">
                <img
                  src={`${imgPath}/${item.movie_image}`}
                  alt=""
                  className="w-[350px] h-[180px] object-cover"
                />

                <div className="slider-zoom absolute top-0 left-0 transition-all ease-in-out duration-200 group-hover:scale-[1.1]">
                  <img
                    src={`${imgPath}/${item.movie_image}`}
                    alt=""
                    className="w-[350px] h-[180px] object-cover"
                  />

                  <div className="bg-dark slider-zoom-info p-4 rounded-b-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all ease-linear duration-200 ">
                    <ul className="flex gap-2">
                      <li>
                        <button className="size-[30px] center-all rounded-full border border-line">
                          <Play size={20} />
                        </button>
                      </li>
                      <li className="mr-auto">
                        <button className="size-[30px] center-all rounded-full border border-line">
                          <Plus size={20} />
                        </button>
                      </li>
                      <li>
                        <button className="size-[30px] center-all rounded-full border border-line">
                          <ChevronDown size={20} />
                        </button>
                      </li>
                    </ul>
                    <ul className="flex items-center gap-3 text-xs mt-5">
                      <li className="border-[1px] text-white border-white py-0.5 px-1.5 text-[10px] leading-none">
                        <span className="translate-y-[1px] block">
                          {item.movie_rating}
                        </span>
                      </li>
                      <li>{item.movie_year}</li>
                      <li className="border-[1px] border-white py-0.5 px-1.5 text-[8px] leading-none">
                        HD
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => sliderRef.current?.slidePrev()}
          className="slide-nav-btn absolute top-[17.8%] z-[1] h-[180px] w-[50px] bg-black bg-opacity-60 opacity-0 transition-opacity hover:opacity-100"
        >
          <ChevronLeft size={50} stroke={"white"} />
        </button>

        <button
          onClick={() => sliderRef.current?.slideNext()}
          className="slide-nav-btn absolute top-[17.8%] right-4 z-[1] h-[180px] w-[50px] bg-black bg-opacity-60 opacity-0 transition-opacity hover:opacity-100"
        >
          <ChevronRight size={50} stroke={"white"} />
        </button>
      </section>
    </>
  );
};

export default SliderMovie;
