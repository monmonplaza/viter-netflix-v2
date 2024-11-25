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
const SliderMovie = () => {
  const sliderRef = React.useRef();

  return (
    <>
      <section className="bg-dark pt-10  relative px-4 ">
        <h4 className="text-white mb-5">Trending Movies</h4>
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
          {Array.from(Array(10).keys()).map((i) => (
            <SwiperSlide key={i}>
              <div className="slider-card translate-y-5 group">
                <img
                  src={`${imgPath}/wedding-singer.jpg`}
                  alt=""
                  className="w-[350px] h-[180px] object-cover"
                />

                <div className="slider-zoom absolute top-0 left-0 transition-all ease-in-out duration-200 group-hover:scale-[1.1]">
                  <img
                    src={`${imgPath}/wedding-singer.jpg`}
                    alt=""
                    className="w-[350px] h-[180px] object-cover"
                  />

                  <div className="bg-dark slider-zoom-info p-4 rounded-b-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all ease-linear duration-200">
                    <ul className="flex gap-2">
                      <li>
                        <button className="size-[40px] center-all rounded-full border border-line">
                          <Play />
                        </button>
                      </li>
                      <li className="mr-auto">
                        <button className="size-[40px] center-all rounded-full border border-line">
                          <Plus />
                        </button>
                      </li>
                      <li>
                        <button className="size-[40px] center-all rounded-full border border-line">
                          <ChevronDown />
                        </button>
                      </li>
                    </ul>
                    <ul className="flex items-center gap-3 text-xs mt-5">
                      <li className="border-[1px] text-white border-white py-0.5 px-1.5 text-[10px] leading-none">
                        <span className="translate-y-[1px] block">16+</span>
                      </li>
                      <li>2022</li>
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
          className="absolute top-[40%] z-[999999999]"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={() => sliderRef.current?.slideNext()}
          className="absolute top-[40%] right-2 z-[999999999] "
        >
          <ChevronRight size={40} />
        </button>
      </section>
    </>
  );
};

export default SliderMovie;
