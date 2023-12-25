import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BetaSection = () => {
    const { t } = useTranslation();

    return (
        <div className="xs:pt-8" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                
                <div className="filterblurbg h-[400px]  flex justify-center items-center  2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]  mr-auto "   >
                    <img className="h-[478px]" src={Beta} alt="" />
                </div>
                <div className=" 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-3">
                    <h3 className="text-[40px] xs:text-[25px] font-[900] font-[inter] leading-[40px] xs:leading-[28px]  gradientText uppercase">{t('BetaSection.title')}</h3>
                    <h5 className="text-[18px] font-[inter] leading-[28.8px] xs:text-[14px] text-white">{t('BetaSection.para')}</h5>

                    <div className="pt-[2rem]  ">
                        <Button link="https://scorpion.casino/" text={`${t('BetaSection.btn')}`} classes="font-[700] bgcolor px-[100px] py-[12px] xs:text-[14px] rounded-full" />
                    </div>
                    
                </div>
            
            </div>

        </div>
    )
}
export default BetaSection 
