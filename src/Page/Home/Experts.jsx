import React from "react";
import { useTranslation } from "react-i18next";


import CryptoExperts from "../../components/CryptoExperts";
import Wrubel from "../../assects/images/wrubel.png";
import Wrubel3 from "../../assects/images/wrubel3.png";
import SmallWrubel from "../../assects/images/wrubelSmall.png";
import Bri from "../../assects/images/bri.png";
import SmallBri from "../../assects/images/briSmall.png";
import Panda from "../../assects/images/panda.png";
import Panda3 from "../../assects/images/panda3.png";
import SmallPanda from "../../assects/images/SmallPanda.png";
import Fomotion3 from "../../assects/images/fomotion3.png";
import Fomotion from "../../assects/images/fomotion.png";
import SmallFomotion from "../../assects/images/smallFomotion.png";
import Ben from "../../assects/images/ben.png";
import SmallBen from "../../assects/images/smallBen.png";
import Costa from "../../assects/images/costa.png";
import SmallCosta from "../../assects/images/smallCosta.png";

function Experts() {
  const { t } = useTranslation();

  return (
    <>
      <div className=" w-[100%]  mx-auto pb-[95px]">
        <div>
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[32px] text-[26px] xs:leading-[30px] text-center gradientText font-[900] leading-[40px] uppercase 2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
         
          {t('Experts.title')}
          </h2>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={`${t('Experts.cardTitle1')}`} para={`${t('Experts.cardPara1')}`} btnLarge={`${t('Experts.cardBtn1')}`} followerslarge={`${t('Experts.cardFollowers1')}`} srcLarge={Ben} srcSmall={SmallBen} name={`${t('Experts.cardBtn1')}`} btnFollowers={`${t('Experts.cardFollowers1')}`} lastSrc={""}/>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-row-reverse flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={`${t('Experts.cardTitle2')}`} para={`${t('Experts.cardPara2')}`} smallContainer={"flex-row-reverse justify-end"} btnLarge={`${t('Experts.cardBtn2')}`} followerslarge={`${t('Experts.cardFollowers2')}`} srcLarge={Costa} srcSmall={SmallCosta} name={`${t('Experts.cardBtn2')}`} btnFollowers={`${t('Experts.cardFollowers2')}`} lastSrc={""}/>
        </div>
        <div className="2xl:pb-[83px] xl:pb-[83px] lg:pb-[83px] md:pb-[44px] sm:pb-[44px] pb-[44px]">
          <CryptoExperts container={"flex flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={`${t('Experts.cardTitle3')}`} para={`${t('Experts.cardPara3')}`} btnLarge={`${t('Experts.cardBtn3')}`} followerslarge={`${t('Experts.cardFollowers3')}`} srcLarge={Wrubel} srcSmall={SmallWrubel} name={`${t('Experts.cardBtn3')}`} btnFollowers={`${t('Experts.cardFollowers3')}`} lastSrc={""}/>
        </div>
        <div className="">
          <CryptoExperts container={"flex flex-row-reverse flex-wrap-reverse 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center gap-y-[23px]"} title={`${t('Experts.cardTitle4')}`} para={`${t('Experts.cardPara4')}`} smallContainer={"flex-row-reverse justify-end"} btnLarge={`${t('Experts.cardBtn4')}`} followerslarge={`${t('Experts.cardFollowers4')}`} srcLarge={Panda} srcSmall={SmallPanda} name={`${t('Experts.cardBtn4')}`} btnFollowers={`${t('Experts.cardFollowers4')}`} lastSrc={""}/>
        </div>
        <p id='success'></p>

      </div>
    </>
  );
}

export default Experts;
