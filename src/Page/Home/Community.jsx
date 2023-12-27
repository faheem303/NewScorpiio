import React from "react";
import { useTranslation } from "react-i18next";


import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import colan from "../../assects/images/co.png"
import smit from "../../assects/images/comm (1).png"
import smit2 from "../../assects/images/comm (3).png"
import smit3 from "../../assects/images/comm (2).png"
import tel from "../../assects/images/teleg.png"




const CommunitySection = () => {
  const { t } = useTranslation();


    return (
        <div className="" >
            <div className="space-y-[55px]">
                <div>
                    <h3 className="text-[43px] xs:text-[26px] xs:leading-[30px] leading-[32px] uppercase font-[900] gradientText text-center">{t('CommunitySection.title')}</h3>
                </div>
              <div className="2xl:flex xl:flex lg:flex md:block sm:block block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-6 sm:space-y-6 space-y-6 justify-between">
              <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[16px] 2xl:h-[180px] xl:h-[200px] lg:h-[280px] md:h-[120px] sm:h-[120px] h-[195px] text-[white] opacity-80"> {t('CommunitySection.cardPara1')}</p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit} alt="" />
                        <h4 className="uppercase pt-2  gradientText text-[15px] font-[900] font-[Inter]">{t('CommunitySection.cardTitle1')}</h4>
                        <a href="https://t.me/scorpioncasino_official/46092" target="_blank">
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter] underline cursor-pointer ">{t('CommunitySection.CardSubTitle')}</p>
                        </a>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />
                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[16px] 2xl:h-[180px] xl:h-[200px] lg:h-[280px] md:h-[120px] sm:h-[120px] h-[195px] text-[white] opacity-80">{t('CommunitySection.cardPara2')} </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit2} alt="" />
                        <h4 className="uppercase pt-2  gradientText text-[15px] font-[900] font-[Inter]"> {t('CommunitySection.cardTitle2')}</h4>
                        <a href="https://t.me/scorpioncasino_official/46235">
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter] underline cursor-pointer ">{t('CommunitySection.CardSubTitle')}</p>
                        </a>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />

                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[16px] 2xl:h-[180px] xl:h-[200px] lg:h-[280px] md:h-[120px] sm:h-[120px] h-[195px] text-[white] opacity-80">{t('CommunitySection.cardPara3')} </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit3} alt="" />
                        <h4 className="uppercase pt-2  gradientText text-[15px] font-[900] font-[Inter]"> {t('CommunitySection.cardTitle3')}</h4>
                        <a href="https://t.me/scorpioncasino_official/46264
">
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter] underline cursor-pointer ">{t('CommunitySection.CardSubTitle')}</p>
                        </a>
                        <img className="absolute -right-[10%] h-[56px] -bottom-[25%]" src={tel} alt="" />

                    </div>
                  </div>
                </div>
              </div>


            </div>
        </div>
    )
}
export default CommunitySection 
