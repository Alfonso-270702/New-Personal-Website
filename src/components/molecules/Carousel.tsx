import { Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { carouselData } from "../../static/carouselData";
interface CarouselProps {
  isSidebarOpen: boolean;
}

const Carousel = ({ isSidebarOpen }: CarouselProps) => {
  return (
    <Swiper
      modules={[Mousewheel, Autoplay]}
      loop={true}
      centeredSlides={false}
      grabCursor={true}
      mousewheel={{
        invert: false,
      }}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      spaceBetween={20}
      className={`breakpoint transition-opacity duration-300 ${
        isSidebarOpen
          ? "pointer-events-none opacity-50"
          : "pointer-events-auto opacity-100"
      }`}
    >
      {carouselData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="max-w-[600px] flex-shrink-0">
            <div className="carousel-item flex flex-col w-[400px] md:w-[500px] lg:w-[600px]">
              <img
                className="w-full h-[368px] object-cover"
                src={item.image}
                alt="Project Image"
              />
              <p className="text-[32px] font-medium mt-[8px]">{item.title}</p>
              <p className="mt-[16px] text-[24px] font-normal text-[#D3D9D4] min-h-[150px]">
                {item.description}
              </p>
              <div className="mt-[16px] flex justify-between">
                <div>
                  <p className="text-[18px] font-normal text-[#D3D9D4]">Role</p>
                  <p className="text-[24px] font-medium">{item.role}</p>
                </div>
                <div>
                  <p className="text-[18px] font-normal text-[#D3D9D4]">
                    Tech Stack
                  </p>
                  <p className="text-[24px] font-medium">{item.techStack}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
