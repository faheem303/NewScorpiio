import React from "react";
import MediaCards from "../../components/MediaCards";
import CityPaper from "../../assects/images/citypaper.png";
import CoinMarket from "../../assects/images/coinMarket.png";
import CryptoNews from "../../assects/images/cryptoNews.png";

function Media() {
  return (
    <div className="w-[100%]  mx-auto pb-[95px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase  2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[25px]">
          press and media
        </h2>
      </div>
      <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-[30px] sm:gap-[30px] gap-[50px]">
        <MediaCards
          cardContainer={"cardbgclr"}
          src={CityPaper}
          imgClass={""}
          para={
            "The simple and intuitive Scorpion Casino platform offers the average person the ability to invest in income-generating properties around the world starting with as little as $100 USD."
          }
        />
        <MediaCards
          cardContainer={"cardbgclr2"}
          src={CoinMarket}
          imgClass={""}
          para={
            "Scorpion Casino will revolutionize the real estate market by giving retail investors a simple platform to build truly passive income and long- term value appreciation."
          }
        />
         <MediaCards
          cardContainer={"cardclr3"}
          src={CryptoNews}
          imgClass={""}
          para={
            "Scorpion Casino’s power play in disrupting the real estate market is fractional investment. NFTs are used to represent NFT ownership in properties and all NFTS are 100% backed by real-world properties."
          }
        />
      </div>
    </div>
  );
}

export default Media;
