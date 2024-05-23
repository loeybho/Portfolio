import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Wrapper = styled.div`
  .contents-swiper {
    max-width: 100%;
  }

  img {
    width: 100%;
  }
`;

function CustomSwiper() {
  return (
    <Wrapper>
      <div className="contents-swiper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src="/3.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/4.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/4.jpeg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
}

export default CustomSwiper;
