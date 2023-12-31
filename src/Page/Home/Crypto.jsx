import React from 'react'
import { useTranslation } from "react-i18next";

import CarImg from "../../assects/images/car.png";

function Crypto() {
  const { t } = useTranslation();

  return (
    <>
    <div className="w-[100%]  mx-auto pb-[70px]">
        <div className="flex  flex-wrap items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[20px]">
          <div className="2xl:w-[45%]  xl:w-[43%] lg:w-[45%] md:w-[90%] sm:w-[95%] w-[100%] flex flex-col 2xl:gap-[20px] xl:gap-[20px] lg:gap-[20px] md:gap-[20px] sm:gap-[17px] gap-[17px]">
            <h2 className="2xl:text-[40px] xl:mr-[4rem] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] xs:px-8 uppercase">
            {t('Crypto.title')}
            </h2>
            <p className="text-white pb-3 text-[18px] xl:text-[18px] lg:text-[18px] font-[700] leading-[23.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            {t('Crypto.subTitle')}
            </p>
            <p className="text-white text-[18px] font-[400] xl:text-[18px] lg:text-[18px] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
            {t('Crypto.para')}
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