import React from "react";

function MediaCards({ cardContainer, imgClass, src, para }) {
  return (
    <>
      <div
        className={`2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[48%] sm:w-[60%] w-[80%]   2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] sm:pt-[34px] pt-[34px] 2xl:pb-[63px] xl:pb-[63px] lg:pb-[63px] md:pb-[63px] sm:pb-[49px] pb-[49px] px-[42px] ${cardContainer}`}
      >
       <div className="h-[220px]">
       <img className={imgClass} src={src} alt="" />
       </div>
       <div className="h-[120px]">
       <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[11px] text-[white] text-center font-[400] 2xl:leading-[20.30px] xl:leading-[20.30px] lg:leading-[20.30px] md:leading-[20.30px] sm:leading-[20.30px] leading-[16.01px]">
          {para}
        </p>
       </div>
      </div>
    </>
  );
}

export default MediaCards;
