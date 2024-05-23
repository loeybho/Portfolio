import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ad_1 from "@assets/ad_1.jpg";
import ad_2 from "@assets/ad_2.jpg";
import ad_3 from "@assets/ad_3.jpg";
import ad_4 from "@assets/ad_4.jpg";
import ad_5 from "@assets/ad_5.jpg";
import ad_6 from "@assets/ad_6.jpg";
import ad_7 from "@assets/ad_7.jpg";
import ad_8 from "@assets/ad_8.jpg";
import ad_9 from "@assets/ad_9.jpg";

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
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img src={ad_1} alt="광고 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ad_9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
}

export default CustomSwiper;
