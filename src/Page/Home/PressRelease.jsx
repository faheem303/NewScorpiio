import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Pagination, Mousewheel, Keyboard  } from "swiper/modules";
import "swiper/swiper-bundle.css";
import PressCard from "../../components/PressCard";

import "swiper/css"; 
import Img1 from "../../assects/images/img1.png";
import Img2 from "../../assects/images/img2.png";
import Img3 from "../../assects/images/img3.png";
import Img4 from "../../assects/images/img4.png";

const PressData = [
  {
    id: uuidv4(),
    src: Img1,
    title:
      "Scorpion Casino: The Crypto-Based Gambling Revolution that’s Taking Hold of Crypto With One Day to Go",
    href1: "https://coinpedia.org/press-release/scorpion-casino-the-crypto-based-gambling-revolution/",
    para: "Scorpion Casino ($SCORP) continues to take hold of the crypto world as its presale closes in on the $1.5 million fundraising milestone.",
    href2: "https://coinpedia.org/press-release/scorpion-casino-the-crypto-based-gambling-revolution/",
  },
  {
    id: uuidv4(),
    src: Img2,
    title:
      "Scorpion Casino is The Ultimate Destination for Licensed and Regulated Online Gambling",
    href1: "https://finbold.com/scorpion-casino-is-the-ultimate-destination-for-licensed-and-regulated-online-gambling/",
    para: "Scorpion Casino (SCORP) has emerged to become one of the top destinations for online gambling, casino games, sports betting...",
    href2: "https://finbold.com/scorpion-casino-is-the-ultimate-destination-for-licensed-and-regulated-online-gambling/",
  },
  {
    id: uuidv4(),
    src: Img3,
    title: "Could Scorpion Casino Token Dethrone Dogecoin? Unlocking Daily Earnings of $10,000 and Beyond",
    href1: "https://www.bsc.news/post/could-scorpion-casino-token-dethrone-dogecoin-unlocking-daily-earnings-of-10-000-and-beyond",
    para: "Scorpion's growing reputation and diverse earning opportunities make it a potential rival to Dogecoin in the crypto market.",
    href2: "https://www.bsc.news/post/could-scorpion-casino-token-dethrone-dogecoin-unlocking-daily-earnings-of-10-000-and-beyond",
  },
  {
    id: uuidv4(),
    src: Img4,
    title: "Price Predictions For Ethereum, XRP, and Scorpion Casino Token",
    href1: "https://www.analyticsinsight.net/price-predictions-for-ethereum-xrp-and-scorpion-casino-token/",
    para: "The crypto landscape is ever-evolving, and as more individuals and institutions dive into the world of digital assets, the quest for solid price ",
    href2: "https://www.analyticsinsight.net/price-predictions-for-ethereum-xrp-and-scorpion-casino-token/",
  },
  
];


function PressRelease() {
  const [slidesPerView, setSlidesPerView] = useState(5);

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setSlidesPerView(3.3);
    } else if (screenWidth >= 768) {
      setSlidesPerView(2.9);
    } else if (screenWidth >= 640) {
      setSlidesPerView(1.2);
    } else if (screenWidth <= 640) {
      setSlidesPerView(1.1);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <div className="2xl:w-[88%] xl:w-[90%] lg:w-[90%] md:w-[95%] sm:w-[95%] w-[95%] pb-[95px]">
          <div>
            <h2 className="xs:text-center 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] gradientText font-[900] leading-[40px] uppercase 2xl:pb-[20px] xl:pb-[20px] lg:pb-[20px] md:pb-[20px] sm:pb-[0px] pb-[0px]">
              Press release
            </h2>
            <p className=" xs:text-center xs:pl-1 xs:pr-2 text-[white] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[400] 2xl:leading-[32.33px] xl:leading-[32.33px] lg:leading-[32.33px] md:leading-[32.33px] sm:leading-[32.33px] leading-[28.80px]">
              Latest articles and updates about Scorpion Casino
            </p>
          </div>
          <div className="flex justify-end pr-[20px] py-[40px] xs:py-[20px]">
          <Swiper
          
                      
                      cssMode={true}
                      slidesPerView={slidesPerView}
                      pagination={true}
                      mousewheel={true}
                      keyboard={true}
                      spaceBetween={14}
                      className="mySwiper"
                      navigation={true}
                      modules={[Navigation, Mousewheel, Keyboard]}
                  >

              {PressData.map((item, id) => (
                <SwiperSlide key={id} className="">
                  <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[70%] w-[95%] 2xl:h-[500px] xl:h-[500px] lg:h-[510px] md:h-[535px] sm:h-[490px] h-[490px] mx-auto">
                    <PressCard
                      src={item.src}
                      title={item.title}
                      para={item.para}
                      href1={item.href1}
                      href2={item.href2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PressRelease;
