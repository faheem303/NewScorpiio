import React from "react";
import { useTranslation } from "react-i18next";


import Button from "../../components/Button/button";
import Frame from "../../assects/images/Frame1.png"
import Sports from "../../assects/images/SPORTS.png"
import CASINO from "../../assects/images/CASINO.png"
import CompIcons from "../../components/compIcons";


import Cham from "../../assects/icons/Cham.png";
import Fifa from "../../assects/icons/Fifa.png";
import MLB from "../../assects/icons/MLB.png";
import NBA from "../../assects/icons/NBA.png";
import NFT from "../../assects/icons/NFT.png";
import UFC from "../../assects/icons/UFC.png";

import Evo from "../../assects/images/evo.png";
import Nov from "../../assects/images/nov.png";
import Net from "../../assects/images/net.png";
import Ama from "../../assects/images/ama.png";
import Go from "../../assects/images/go.png";
import Egt from "../../assects/images/egt.png";
import BuyBackSectionCard from "./BuybackSection";


const imgData2 = [
    {
        id: 7,
        imgName: Evo,
    },
    {
        id: 5,
        imgName: Nov,
    },
    {
        id: 3,
        imgName: Net,
    },
    {
        id: 4,
        imgName: Ama,
    },
    {
        id: 4,
        imgName: Go,
    },
    {
        id: 4,
        imgName: Egt,
    }
]

const imgData = [
    {
        id: 7,
        imgName: Fifa,
    },
    {
        id: 5,
        imgName: Cham,
    },
    {
        id: 3,
        imgName: MLB,
    },
    {
        id: 4,
        imgName: NBA,
    },
    {
        id: 4,
        imgName: NFT,
    },
    {
        id: 4,
        imgName: UFC,
    }
]


const HowItWork = () => {
    const { t } = useTranslation();


    return (
        <div className="space-y-[95px] relative z-[2]" >
            <div className="space-y-[60px]">
                <div className="space-y-3 w-[96%] xs:w-[100%] sm:w-[100%] md:w-[100%] m-auto">
                    <h3 className="font-[Inter] text-[43px] xs:text-[30px]  font-[900] leading-[40px] uppercase gradientText text-center">{t('HowItWork.title1')}</h3>
                    <h5 className="font-[inter] xs:space-y-3 text-[18px] font-[400] leading-[28px] text-[#fff] text-[white] text-center">
                    {t('HowItWork.para1')} <br />
                        <h5 className="pt-1"> {t('HowItWork.para2')}</h5></h5>


                </div>

                <div className="flex justify-center flex-col items-center space-y-3" >
                    <img className=" w-[100%] 2xl:w-[100%] xl:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%]" src={Frame} alt="" />

                </div>
                <div>
                    <BuyBackSectionCard />
                </div>
            </div>
            <div className=" 2xl:space-y-[6rem] xl:space-y-[6rem] lg:space-y-[6rem] md:space-y-[5rem] sm:space-y-[5rem] space-y-[5rem] ">
                <div>
                    <div className="flex  xs:block sm:block md:block justify-between 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-[5rem] sm:space-y-[5rem] space-y-[3rem] items-center">

                        <div className="w-[48%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-[20px] xs:text-center sm:text-center ">
                            <h3 className="text-[40px] xs:text-[26px] font-[Inter] leading-[40px] uppercase font-[900] gradientText">{t('HowItWork.title2')}</h3>
                            <h5 className="text-[18px] xs:text-[18px] font-[inter] leading-[28px] font-[400] text-white pb-5"> {t('HowItWork.para3')}</h5>
                            <a className="2xl:block xl:block lg:block md:hidden sm:hidden hidden" href="#hero">
                                <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[700] leading-[21px] font-[inter]">{t('HowItWork.btn')}</button>
                            </a>
                        </div>
                        <div className="w-[49%] filterblurbg 2xl:h-[420px] xl:h-[420px] lg:h-[420px] md:h-[420px] sm:h-[270px] h-[270px]  flex justify-center items-end xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[310px] 2xl:h-[470px] xl:h-[470px] lg:h-[470px] md:h-[470px] sm:h-[300px]  pb-[1rem]" src={Sports} alt="" />
                        </div>
                        <a className="2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex justify-center " href="#hero">
                            <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[700] leading-[21px] font-[inter]">{t('HowItWork.btn')}</button>
                        </a>
                    </div>

                </div>
                <div>
                    <div className="flex items-center justify-between xs:flex-col-reverse  sm:flex-col-reverse md:flex-col-reverse ">
                        <a className="2xl:hidden xl:hidden lg:hidden md:block sm:block block" href="#hero">
                            <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[700] leading-[21px] font-[inter]">{t('HowItWork.btn')}</button>
                        </a>
                        <div className="mb-5 w-[49%] filterblurbg 2xl:h-[420px] xl:h-[420px] lg:h-[420px] md:h-[420px] sm:h-[270px] h-[270px]  flex justify-center items-end xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[310px] 2xl:h-[470px] xl:h-[470px] lg:h-[470px] md:h-[470px] sm:h-[300px]  pb-[1rem]" src={CASINO} alt="" />
                        </div>



                        <div className="w-[44%] 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-[4rem] sm:pb-[4rem] pb-[4rem] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-[20px] xs:text-center sm:text-center ">
                            <h3 className="text-[40px] xs:text-[26px] font-[Inter] leading-[40px] uppercase font-[900] gradientText">{t('HowItWork.title3')}</h3>
                            <h5 className="text-[18px] xs:text-[18px] font-[inter] leading-[28px] font-[400] text-white pb-5">{t('HowItWork.para4')}</h5>
                            <a className="2xl:block xl:block lg:block md:hidden sm:hidden hidden" href="#hero">
                                <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[700] leading-[21px] font-[inter]">{t('HowItWork.btn')}</button>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default HowItWork 
