import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";
import Dailyimg from "../../assects/images/dailyimg.png"
import Dailyimgmob from "../../assects/images/dailymob.png"



const DailySection = () => {
    const { t } = useTranslation();

    return (
        <div className="relative z-[2]" >
        <div className="flex items-center justify-between  xs:hidden sm:hidden md:hidden">
            
            <div className="dailyCardbg h-[580px] pt-5 px-3 flex justify-center items-center  2xl:w-[57%] xl:w-[57%] lg:w-[57%] md:w-[100%] sm:w-[100%] w-[100%] mr-auto "   >
                <img className="" src={Dailyimg} alt="" />
                
            </div>
            <div className="  2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-[20px]">
                <h3 className="text-[43px] xs:text-[43px] pr-4 font-[900] font-[Inter] leading-[40px]  gradientText uppercase">{t('DailySection.title')}</h3>
                <h5 className="text-[18px] font-[inter] font-[400] leading-[28.8px] xs:text-[14px] text-white">{t('DailySection.para1')}</h5>

                <div className="">
                    <Button link="#hero" text={`${t('DailySection.btn')}`} classes=" bgcolor h-[64px] text-[#1C1D23] px-[100px] py-[12px] text-[18px] font-[700] leading-[21px] rounded-full" />
                </div>
                
            </div>
        
        </div>
        <div className="hidden xs:block sm:block md:block">
            
            <div className="  2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] xs:text-center sm:text-center pb-4 space-y-[25px]">
                <h3 className="text-[26px] pr-4 font-[900] font-[Inter] leading-[28px]  gradientText uppercase">{t('DailySection.title')}</h3>
                
                <h5 className="text-[18px] font-[Inter] font-[400] leading-[23.8px] text-white">{t('DailySection.para1')}</h5>
                
            </div>
            <div className=" h-[300px] pt-3 px-2 flex justify-center items-center  2xl:w-[57%] xl:w-[57%] lg:w-[57%] md:w-[100%] sm:w-[100%] w-[100%] mr-auto "   >
            <img className="" src={Dailyimgmob} alt="" />
            </div>
        
        </div>

    </div>
    )
}
export default DailySection