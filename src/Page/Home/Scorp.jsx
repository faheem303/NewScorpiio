import React from 'react'
import { useTranslation } from "react-i18next";

import ScorpImg from "../../assects/images/scorpImg.png";
import Button from "../../components/Button/button";

function Scorp() {
  const { t } = useTranslation();

  return (
    <div className=" w-[100%]  mx-auto pb-[75px]">
    <div className="flex items-center flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[19px] 2xl:border-[1.5px] xl:border-[1.5px] lg:border-[1.5px] md:border-[1.5px] sm:border-[1.5px] border-[0] border-solid border-[#FFFBC8] 2xl:py-[40px] xl:py-[40px] lg:py-[40px] md:py-[40px] sm:py-[40px] py-0 2xl:px-[43px] xl:px-[43px] lg:px-[43px] md:px-[43px] sm:px-[43px] px-0 rounded-[37px]">
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[45%] md:w-[90%] sm:w-[95%] w-[100%] flex flex-col 2xl:gap-[25px] xl:gap-[25px] lg:gap-[25px] md:gap-[25px] sm:gap-[17px] gap-[17px]">
       <div className='flex flex-col 2xl:gap-[25px] xl:gap-[25px] lg:gap-[25px] md:gap-[25px] sm:gap-[17px] gap-[17px]'>
       <h2 className="2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[30px] text-[30px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center gradientText font-[900] leading-[40px] uppercase">
       {t('Scorp.title')}
        </h2>
        <p className="text-white text-[18px] font-[700] leading-[27px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
        {t('Scorp.subTitle')}
        </p>
        <p className="text-white 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[18px] font-[400] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] leading-[28.80px] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
        {t('Scorp.para1')}
        </p>
       </div>
       <div className='flex flex-col 2xl:gap-y-[6px] xl:gap-y-[6px] lg:gap-y-[6px] md:gap-y-[6px] sm:gap-y-[17px] gap-y-[17px] 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center items-center'>
        <p className='text-[18px] xs:text-[16px] text-white font-[400px] leading-[24px]'>
        {t('Scorp.para2')}
        </p>
        <p className='text-[18px] xs:text-[16px] text-white font-[400px] leading-[24px]'>
        {t('Scorp.para3')}
        </p>
        <p className='text-[18px] xs:text-[16px] text-white font-[400px] leading-[24px]'>
        {t('Scorp.para4')}
        </p>
        <p className='text-[18px] xs:text-[16px] text-white font-[400px] leading-[24px]'>
        {t('Scorp.para5')}
        </p>
        <p className='text-[18px] xs:text-[16px] text-white font-[400px] leading-[24px]'>
        {t('Scorp.para6')}
        </p>
       </div>
        <div className="2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
        <Button link="hero" text={`${t('Scorp.btn')}`} classes="bgcolor 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[18px] text-[black] 2xl:font-[700] xl:font-[700] lg:font-[700] md:font-[700] sm:font-[700] font-[700] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] leading-[21px] 2xl:h-[48px] xl:h-[48px] lg:h-[48px] md:h-[48px] sm:h-[48px] h-[42px] rounded-[37px] 2xl:w-[225px] xl:w-[225px] lg:w-[225px] md:w-[225px] sm:w-[225px] w-[100%]"/>
        </div>
      </div>
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[54%] md:w-[90%] sm:w-[95%] w-[100%]">
        <img
          className="w-[100%] relative z-[1] 2xl:h-[360px] xl:h-[360px] lg:h-[360px] md:h-[360px] sm:h-auto h-auto"
          src={ScorpImg}
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Scorp