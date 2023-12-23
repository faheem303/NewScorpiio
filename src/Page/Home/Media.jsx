import React from "react";
import MediaCards from "../../components/MediaCards";
import CityPaper from "../../assects/images/citypaper.png";
import CoinMarket from "../../assects/images/coinMarket.png";
import CryptoNews from "../../assects/images/cryptoNews.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Mousewheel,Pagination, Keyboard } from "swiper/modules";

function Media() {
  return (
    <div className="w-[100%]  mx-auto pb-[95px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase  2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[25px]">
          press and media
        </h2>
      </div>
      <Swiper

        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={14}
        className="mySwiper flex justify-center"
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >

        <SwiperSlide className="wrap"  >
        <MediaCards
          cardContainer={"cardclr3"}
          src={CoinMarket}
          imgClass={""}
          para={
            "This gaming-related project’s inviting atmosphere and excellent rewards make it a success. As such, many analysts think it could be the next billion-dollar crypto."
          }
        />
        </SwiperSlide>
        <SwiperSlide className="wrap"  >
          <MediaCards
            cardContainer={"cardbgclr2"}
            src={CryptoNews}
            imgClass={""}
            para={
              "Overall, Scorpion Casino is one of the only projects that can provide a sustainable passive income to holders - regardless of the overall market conditions."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="wrap"  >
          <MediaCards
            cardContainer={"cardbgclr"}
            src={CityPaper}
            imgClass={""}
            para={
              "Scorpion Casino is on a mission to create the world’s leading crypto-based online casino, where holders of its token can earn a daily yield based on the casino’s performance."
            }
          />
        </SwiperSlide>

      </Swiper>
    
    </div>
  );
}

export default Media;
