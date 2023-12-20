import React from "react";
import GamblingImg from "../../assects/images/gambling.png";
import Button from "../../components/Button/button";

function Gambling() {
  return (
    <div className=" w-[100%]  mx-auto pb-[70px]">
      <div className="flex items-center flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[19px] 2xl:border-[1.5px] xl:border-[1.5px] lg:border-[1.5px] md:border-[1.5px] sm:border-[1.5px] border-[0] border-solid border-[#FFFBC8] 2xl:py-[55px] xl:py-[55px] lg:py-[55px] md:py-[55px] sm:py-[55px] py-0 2xl:px-[50px] xl:px-[50px] lg:px-[50px] md:px-[50px] sm:px-[50px] px-0 rounded-[37px]">
        <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[90%] sm:w-[95%] w-[100%]">
          <img
            className="w-[100%] 2xl:h-[395px] xl:h-[395px] lg:h-[395px] md:h-[395px] sm:h-auto h-auto"
            src={GamblingImg}
            alt=""
          />
        </div>
        <div className=" 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[90%] sm:w-[95%] w-[100%] flex flex-col 2xl:gap-[25px] xl:gap-[25px] lg:gap-[25px] md:gap-[25px] sm:gap-[17px] gap-[17px]">
          <h2 className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
            ONLINE GAMBLING IS THE FUTURE
          </h2>
          <p className="text-white text-[18px] font-[600] leading-[27px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            Gambling is one of the oldest and most lucrative industries in the
            history of mankind and digitization is just the next logical step.
          </p>
          <p className="text-white 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[18px] font-[400] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            People have been gambling for the last 3,000 years, regardless of
            location, time, or market conditions. Gambling is hard-wired in
            human psychology. This makes an online gambling platform one of the
            most interesting opportunities to generate cash flow with passive
            staking income, and build long-term wealth.
          </p>
          <div className="2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
          <Button link="#hero" text={"Buy $SCORP"} classes="bgcolor 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[18px] text-[black] 2xl:font-[700] xl:font-[700] lg:font-[700] md:font-[700] sm:font-[600] font-[700] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] leading-[21px] 2xl:h-[48px] xl:h-[48px] lg:h-[48px] md:h-[48px] sm:h-[48px] h-[42px] rounded-[37px] 2xl:w-[225px] xl:w-[225px] lg:w-[225px] md:w-[225px] sm:w-[225px] w-[100%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gambling;
