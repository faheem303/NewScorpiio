import React from "react";

function MediaCards({ cardContainer, imgClass, src, para }) {
  return (
    <>
      <div
        className={`2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[80%] w-[80%] mx-auto    2xl:pt-[44px] xl:pt-[44px] lg:pt-[44px] md:pt-[44px] sm:pt-[34px] pt-[34px] 2xl:pb-[35px] xl:pb-[35px] lg:pb-[35px] md:pb-[63px] sm:pb-[49px] pb-[49px] px-[42px] ${cardContainer}`}
      >
       <div className="2xl:h-[168px] xl:h-[168px] lg:h-[168px] md:h-[148px] sm:h-[148px] h-[132px] 2xl:mb-6 xl:mb-4 lg:mb-0 md:mb-4 sm:mb-0 mb-0">
       <img className={`${imgClass}`} src={src} alt="" />
       </div>
       <div className="h-[120px] lg:h-[210px]">
       <p className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] text-[11px] text-[white] text-center font-[400] 2xl:leading-[20.30px] xl:leading-[20.30px] lg:leading-[20.30px] md:leading-[20.30px] sm:leading-[20.30px] leading-[16.01px]">
          {para}
        </p>
       </div>
      </div>
    </>
  );
}

export default MediaCards;
