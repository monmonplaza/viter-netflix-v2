import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SliderMovie = () => {
  const sliderRef = React.useRef();

  return (
    <>
      <section className="px-10">
        <div className="slider-card relative ">
          <img
            src={`${imgPath}/wedding-singer.jpg`}
            alt=""
            className=" object-cover -z-1 w-[200px] h-[150px]"
          />

          <div className="slider-info absolute w-[200px] h-[150px] top-0 left-0 z-50">
            <img
              src={`${imgPath}/wedding-singer.jpg`}
              alt=""
              className="w-full  object-cover"
            />

            <div className="bg-red-400">asjkldjf;aklsdjf;klasjd;flkasjd</div>
          </div>
        </div>

        <button onClick={() => sliderRef.current?.slidePrev()}>Prev</button>

        <button onClick={() => sliderRef.current?.slideNext()}>Next</button>
      </section>
    </>
  );
};

export default SliderMovie;
