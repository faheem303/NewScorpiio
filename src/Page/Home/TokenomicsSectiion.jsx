import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper1.png"
import tokens from "../../assects/images/tokens.png"





const TokenomicsSectiion= () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-[6rem] xs:pt-4 xs:space-y-[2rem] sm:space-y-[2rem]" >
            <div className="">
                <div className="space-y-12 ">
                    <h3 className="font-[Inter] text-center text-[40px] xs:text-[30px] font-[900] text-[white] gradientText uppercase">{t('TokenomicsSectiion.title')}</h3>
                
                    <img className="w-[64%] xs:h-[auto] xs:w-[100%] sm:w-[100%] md:w-[80%] m-auto" src={tokens} alt="" />

                  
                </div>

                
            </div>
       

        </div>
    )
}
export default TokenomicsSectiion
