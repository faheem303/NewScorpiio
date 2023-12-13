import React from "react";
import MediaCards from "../../components/MediaCards";
import CityPaper from "../../assects/images/citypaper.png";
import CoinMarket from "../../assects/images/coinMarket.png";
import CryptoNews from "../../assects/images/cryptoNews.png";

function Media() {
  return (
    <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto pb-[95px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase 2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] 2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[25px]">
          press and media
        </h2>
      </div>
      <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-[30px] sm:gap-[30px] gap-[50px]">
        <MediaCards
          cardContainer={"cardbgclr"}
          src={CityPaper}
          imgClass={"2xl:mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-[40px] sm:mb-[40px] mb-[30px]"}
          para={
            "The simple and intuitive Scorpion Casino platform offers the average person the ability to invest in income-generating properties around the world starting with as little as $100 USD."
          }
        />
        <MediaCards
          cardContainer={"cardbgclr2"}
          src={CoinMarket}
          imgClass={"2xl:mb-[24px] xl:mb-[24px] lg:mb-[24px] md:mb-[24px] sm:mb-[24px] mb-[20px]"}
          para={
            "Scorpion Casino will revolutionize the real estate market by giving retail investors a simple platform to build truly passive income and long- term value appreciation."
          }
        />
         <MediaCards
          cardContainer={"cardclr3"}
          src={CryptoNews}
          imgClass={"2xl:mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-[40px] sm:mb-[40px] mb-[30px]"}
          para={
            "Scorpion Casino’s power play in disrupting the real estate market is fractional investment. NFTs are used to represent NFT ownership in properties and all NFTS are 100% backed by real-world properties."
          }
        />
      </div>
    </div>
  );
}

export default Media;
