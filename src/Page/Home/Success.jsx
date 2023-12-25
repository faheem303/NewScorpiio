import React from 'react'
import { useTranslation } from "react-i18next";


import SuccessCards from '../../components/SuccessCards'
import CityPaper from "../../assects/images/ex1 (3).png";
import CoinMarket from "../../assects/images/ex1 (2).png";
import CryptoNews from "../../assects/images/ex1 (1).png";

function Success() {
  const { t } = useTranslation();

  return (
    <>
     <div className=" w-[100%]  mx-auto pb-[95px]">
      <div>
        <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] text-center gradientText font-[900] leading-[40px] uppercase 2xl:pb-[67px] xl:pb-[67px] lg:pb-[67px] md:pb-[44px] sm:pb-[44px] 2xl:pb-[39px] xl:pb-[39px] lg:pb-[39px] md:pb-[39px] sm:pb-[30px] pb-[25px]">
        {t('Success.title')}
        </h2>
      </div>
      <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-[30px] sm:gap-[30px] gap-[50px]">
        <SuccessCards
          src={CityPaper}
          imgClass={"h-[210px] xs:h-[180px] mx-auto"}
          title={`${t('Success.cardTitle1')}`}
          para={`${t('Success.cardPara1')}`}
        />
       <SuccessCards
          src={CryptoNews}
          imgClass={"h-[200px] xs:h-[180px] mx-auto"}
          title={`${t('Success.cardTitle2')}`}
          para={`${t('Success.cardPara2')}`}
        />
        <SuccessCards 
          src={CoinMarket}
          imgClass={"h-[170px] mx-auto "}
          title={`${t('Success.cardTitle3')}`}
          para={`${t('Success.cardPara3')}`}
        />
      </div>
    </div>
    </>
  )
}

export default Success