import React from "react";
import { useTranslation } from "react-i18next";


import bit from "../../assects/images/exbox.png"
import exc from "../../assects/icons/ex1.png"




const ExchangeSection = () => {
    const { t } = useTranslation();

    return (
        <div className="" >
            <div className="">
                <div className="pb-[35px] space-y-[15px]">
                    <h3 className="text-center text-[40px] xs:text-[24px] xs:px-2 font-[900] font-[inter]  gradientText uppercase">
                    {t('ExchangeSection.mainTitle')}
                        </h3>
                        <h5 className="2xl:block xl:block lg:block md:hidden sm:hidden hidden text-white text-center text-[24px] font-[900] leading-[40px] font-[Inter] uppercase">{t('ExchangeSection.subTitle')}</h5>
                        <h5 className="2xl:hidden xl:hidden lg:hidden md:block sm:block block text-white text-center text-[18px] font-[900] leading-[22px] font-[Inter] uppercase">{t('ExchangeSection.subTitle')}</h5>
                  
                    
                </div>

               <div className="flex justify-between gap-[11px] 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-5 items-center justify-between xs:block sm:block md:block">
               <div className="exchnagecolor flex-col 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%] flex flex-col justify-center items-center  h-[244px]  xs:h-[196px] flex items-center justify-center rounded-[20px]">
                    <img className="h-[117px]" src={bit} alt="" />
                    <p className="pt-[1px] text-center text-[18px] uppercase text-white font-[400]">{t('ExchangeSection.cardTitle1')}</p>
                </div>
                <div className="exchnagecolor  2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%] flex flex-col justify-center items-center  h-[244px]  xs:h-[196px] flex items-center flex-col justify-center rounded-[20px]">
                    <img className="h-[117px]  w-[117.051px]" src={exc} alt="" />
                    <p className="text-center text-[18px] uppercase text-white font-[400]">{t('ExchangeSection.cardTitle2')}</p>
                </div>
                <div className="exchnagecolor 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%] flex flex-col justify-center items-center  h-[244px] xs:h-[196px] flex items-center flex-col justify-center rounded-[20px]">
                    <img className="h-[117px]  w-[117.051px] " src={exc} alt="" />
                    <p id='scorpion'  className="text-center text-[18px] uppercase text-white font-[400]">{t('ExchangeSection.cardTitle3')}</p>

                </div>
               </div>
              
            </div>

        </div>
    )
}
export default ExchangeSection 
