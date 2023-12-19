import React from 'react'
import CarImg from "../../assects/images/car.png";

function Crypto() {
  return (
    <>
    <div className="w-[100%]  mx-auto pb-[95px]">
        <div className="flex  flex-wrap items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[20px]">
          <div className="2xl:w-[45%]  xl:w-[43%] lg:w-[45%] md:w-[90%] sm:w-[95%] w-[100%] flex flex-col 2xl:gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[17px] gap-[17px]">
            <h2 className="2xl:text-[40px] xl:mr-[4rem] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
            CRYPTO CASINO CASE STUDY
            </h2>
            <p className="text-white pb-3 text-[18px] xl:text-[16px] lg:text-[16px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            26-year-old Crypto Casino Owner Buys a Villa for $80 Million.
            </p>
            <p className="text-white text-[18px] font-[400] xl:text-[16px] lg:text-[16px] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            According to The Guardian, a 26-year-old owner of a crypto casino made headlines by purchasing Australia’s most expensive villa for an astounding $88 million USD after just a few years of operating his online casino alongside his co-founder. The growth of crypto casinos is truly impressive, and now, for the first time ever, you have the chance to get involved. While these outcomes are exceptional and not the norm, they clearly demonstrate the immense potential.
            </p>
          </div>
          <div className="2xl:w-[52%] xl:w-[54%] lg:w-[52%] md:w-[90%] sm:w-[95%] w-[100%]">
            <img className="w-[100%] sm:h-auto h-auto" src={CarImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Crypto