import React from "react";
import { useTranslation } from "react-i18next";


import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import hugedes from "../../assects/images/hugedes.png"




const HugeSection = () => {
    const { t } = useTranslation();


    return (
        <div className="py-[70px]" >
            <div className="">
                <div className="py-[55px] px-[55px] hugeborder space-y-5 2xl:flex xl:flex items-center justify-between md:hidden sm:hidden hidden">
                    <div className="w-[35%]">
                        <img src={hugedes} alt="" />
                    </div>
                    <div className="w-[58%] space-y-[21px]">
                        <h3 className="xs:text-center text-[36px] font-[900] leading-[38px] font-[inter]  gradientText uppercase">
                        {t('HugeSection.title1')}
                        </h3>
                        <p className="xs:text-center text-[18px] pb-[21px] opacity-70 leading-[24px] pb-2 text-white"> {t('HugeSection.para1')}</p>
                    <a href="#home" className="">
                    <button className="bgcolor font-[700] w-[250px] h-[56px] text-[16px] rounded-full">{t('HugeSection.btn')}</button>
                    </a>
                    </div>


                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block  space-y-5">
                    <h3 className="xs:text-center text-[36px] font-[900] leading-[38px] font-[inter]  gradientText uppercase">
                    {t('HugeSection.title2')} <br /> {t('HugeSection.title3')}
                    </h3>
                    <p className="xs:text-center text-[18px] opacity-70 pb-2 text-white">{t('HugeSection.para2')}</p>
                    <div className="filterblurbg">
                        <img src={huge} alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}
export default HugeSection 
