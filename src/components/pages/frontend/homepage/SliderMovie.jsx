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
          <SwiperSlide>
            <div className="slider-card relative ">
              <img
                src={`${imgPath}/wedding-singer.jpg`}
                alt=""
                className="w-full  object-cover"
              />

              <div className="slider-info absolute top-0 left-0 z-50">
                <img
                  src={`${imgPath}/wedding-singer.jpg`}
                  alt=""
                  className="w-full  object-cover"
                />

                <div className="bg-red-400">
                  asjkldjf;aklsdjf;klasjd;flkasjd
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button onClick={() => sliderRef.current?.slidePrev()}>Prev</button>

        <button onClick={() => sliderRef.current?.slideNext()}>Next</button>
      </section>
    </>
  );
};

export default SliderMovie;
