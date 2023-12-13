import React from 'react'
import SuccessCards from '../../components/SuccessCards'
import CityPaper from "../../assects/images/ex1 (3).png";
import CoinMarket from "../../assects/images/ex1 (2).png";
import CryptoNews from "../../assects/images/ex1 (1).png";

function Success() {
  return (
    <>
     <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto pb-[95px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase 2xl:pb-[67px] xl:pb-[67px] lg:pb-[67px] md:pb-[44px] sm:pb-[44px] 2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[25px]">
        Success Stories & Growth Potential
        </h2>
      </div>
      <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-[30px] sm:gap-[30px] gap-[50px]">
        <SuccessCards
          src={CityPaper}
          imgClass={"h-[210px] mx-auto"}
          title={"Rollbit"}
          para={
            "Rollbit recently launched its token, and by implementing parts of our outlined Burn and Buyback mechanism, as detailed in our whitepaper, the token's value surged remarkably, offering over 500x returns to early $RLB holders."
          }
        />
       <SuccessCards
          src={CoinMarket}
          imgClass={"h-[200px] mx-auto"}
          title={"Funtoken"}
          para={
            "Launched years ago, Funtoken remains consistently ranked in the top 500 on CoinMarketCap. It is listed on top-tier exchanges like Huobi and Binance."
          }
        />
        <SuccessCards
          src={CryptoNews}
          imgClass={"h-[200px] mx-auto"}
          title={"Stake"}
          para={
            "Stake is one of the fastest-growing companies worldwide, valued at billions of dollars. They have established long-term partnerships with music superstar Drake and the UFC."
          }
        />
      </div>
    </div>
    </>
  )
}

export default Success