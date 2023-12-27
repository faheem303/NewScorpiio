
import React from "react";
import { useTranslation } from "react-i18next";


import licimg1 from "../../assects/images/licimg (1).png"
import licimg2 from "../../assects/images/licimg (2).png"
import licimg3 from "../../assects/images/licimg (3).png"




const LicensedCardSection = () => {
    const { t } = useTranslation();

    return (
        <div className="" >
            <div className="flex items-center 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-5 justify-between gap-[28px] xs:block sm:block md:block">
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[auto] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[inter] -tracking-[1.7px] text-[24px] 2xl:text-[28px] xl:text-[25px] lg:text-[24px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">{t('LicensedCard.card1Title')}</h3>
                        <p className=" font-[inter] text-[14px] font-[400] leading-[20.064px] text-white">{t('LicensedCard.card1Para')}</p>
                    </div>
                    <div className="">
                        <img className=" w-[163px] h-[110px]" src={licimg1} alt="" />
                    </div>
                </div>
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[auto] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[inter] -tracking-[1.7px] text-[24px] 2xl:text-[32px] xl:text-[26px] lg:text-[24px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">{t('LicensedCard.card2Title')}</h3>
                        <p className=" font-[inter] text-[14px] font-[400] leading-[20.064px] text-white">{t('LicensedCard.card2Para')}</p>
                    </div>
                    <div className="">
                        <img className=" w-[163px] h-[110px]" src={licimg3} alt="" />
                    </div>
                </div>
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[auto] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[inter] -tracking-[1.7px] text-[24px] 2xl:text-[32px] xl:text-[26px] lg:text-[24px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">{t('LicensedCard.card3Title')}</h3>
                        <p className=" font-[inter] text-[14px] font-[400] leading-[20.064px] text-white">{t('LicensedCard.card3Para')}</p>
                    </div>
                    <div className="">
                        <img className=" w-[163px] h-[110px]" src={licimg2} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default LicensedCardSection 
