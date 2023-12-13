import React from "react";
import BarriersImg from "../../assects/images/barriers.png";

function Barriers() {
  return (
    <>
      <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[90%]  mx-auto py-[95px]">
        <div className="flex flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[29px]">
          <div className="relative 2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[90%] sm:w-[95%] w-[100%]">
            <img
              className="absolute -top-[29%] w-[100%] 2xl:h-[554px] xl:h-[554px] lg:h-[554px] md:h-[554px] sm:h-auto h-auto"
              src={BarriersImg}
              alt=""
            />
          </div>
          <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[80%] sm:w-[85%] w-[90%] flex flex-col 2xl:gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[17px] gap-[17px]">
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
              BREAKING DOWN THE BARRIERS TO THE CASINO INDUSTRY
            </h2>
            <p className="text-white text-[18px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
              $SCORP Delivers Exclusive Insider Access to the world of Online
              Gambling.
            </p>
            <p className="text-white text-[18px] font-[400] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
              Launching an online casino typically takes 6-18 months of intense
              preparation, a $2 million investment, legal connections, and years
              of experience in the gambling industry. These high barriers have
              excluded many individuals from entering this sector. But now, with
              $SCORP, the first social online gambling cryptocurrency, anyone
              can participate in this lucrative field without massive capital or
              experience and potentially earn substantial profits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Barriers;
