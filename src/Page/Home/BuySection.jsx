import React from "react";
import { useTranslation } from "react-i18next";


import Buyimg from "../../assects/images/buysec.png"




const BuySection = () => {
    const { t } = useTranslation();

    return (
        <div className="" >
            {/* <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p> */}
            <h2 className="text-[40px] xs:text-[30px]  uppercase text-center font-[900] gradientText  font-[Inter] leading-[40px]">{t('BuySection.title')}</h2>
            <div className="pt-[31px] w-full block xs:space-y-3 sm:space-y-3 md:space-y-3 items-end justify-between 2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">
                <div className="2xl:w-[28%] xl:w-[30%] lg:w-[38%] md:w-[100%] sm:w-full w-full  space-y-3 pb-7">
                    <div className="stepsbg py-4 2xl:space-y-1 px-8 rounded-[40px]">
                        <h3 className="2xl:text-[20px] text-[16px] xs:text-[16px]  font-[700] leading-[18px] font-[inter] gradientText">{t('BuySection.cardTitle1')}
                        </h3>
                        <h4 className="2xl:block xl:block lg:block md:hidden sm:hidden hidden  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter] text-white  leading-[29px] ">{t('BuySection.cardSubtitle1')}</h4>
                        <h4 className="2xl:hidden xl:hidden lg:hidden md:block sm:block block  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter]  text-white leading-[29px] ">{t('BuySection.cardSubtitle1')}</h4>
                        <p className="2xl:text-[16px] text-[14px] text-[white] 2xl:leading-[24px] leading-[19px]  font-[400] font-[inter] ">{t('BuySection.cardPara1')}</p>
                    </div>
                    <div className="stepsbg py-4 2xl:space-y-1 px-8 rounded-[40px]">
                        <h3 className="2xl:text-[20px] text-[16px] xs:text-[16px]  font-[700] leading-[18px] font-[inter] gradientText">{t('BuySection.cardTitle2')}
                        </h3>
                       
                        <h4 className="2xl:block xl:block lg:block md:hidden sm:hidden hidden  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter] text-white  leading-[29px] ">{t('BuySection.cardSubtitle2')}</h4>
                        <h4 className="2xl:hidden xl:hidden lg:hidden md:block sm:block block  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter] text-white leading-[29px] ">{t('BuySection.cardSubtitle2')}</h4>
                        <p className="2xl:text-[16px] text-[14px] text-[white] 2xl:leading-[24px] leading-[19px]  font-[400] font-[inter] ">{t('BuySection.cardPara2')}</p>
                    </div>
                    <div className="stepsbg py-4 2xl:space-y-1 px-8 rounded-[40px]">
                        <h3 className="2xl:text-[20px] text-[16px] xs:text-[16px]  font-[700] leading-[18px] font-[inter] gradientText">{t('BuySection.cardTitle3')}
                        </h3>
                      
                        <h4 className="2xl:block xl:block lg:block md:hidden sm:hidden hidden  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter] text-white leading-[29px] ">{t('BuySection.cardSubtitle3')}</h4>
                        <h4 className="2xl:hidden xl:hidden lg:hidden md:block sm:block block  2xl:text-[21px] text-[16px]  xs:text-[16px] font-[900] font-[Inter] text-white leading-[29px] ">{t('BuySection.cardSubtitle3')}</h4>
                        <p className="2xl:text-[16px] text-[14px] text-[white] 2xl:leading-[24px] leading-[19px]  font-[400] font-[inter] ">{t('BuySection.cardPara3')}</p>
                    </div>
                    <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden pt-3 flex mt-14 xs:justify-center sm:justify-center">
                           <a href="#hero">
                           <button className="bgcolor xs:text-[14px]  text-[#1C1D23] rounded-full flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700] font-[inter] w-[210px] space-x-3 mr-4" >{t('BuySection.btn1')}</button>
                           </a>
                           <a href="https://t.me/scorpioncasino_official" target="_blank"> 
                           <button className="stepbtnbg text-white w-[140px] justify-center xs:text-[16px]  rounded-full flex items-center 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   space-x-3 text-[16px] font-[700] font-[inter]" >{t('BuySection.btn2')}</button></a>
                        </div>
                </div>
                <div className="2xl:w-[68%]  xl:w-[68%]  lg:w-[61%] md:w-[100%] sm:w-full w-full">
                    <img className="" src={Buyimg} alt="" />
                </div>

                <div className="2xl:hidden xl:hidden lg:hidden xs:w-[90%] xs:mx-auto md:block sm:flex xs:flex pt-3 flex mt-14 xs:justify-center sm:justify-center">
                           <a href="#hero">
                           <button className="bgcolor xs:text-[14px] xs:w-[170px]  text-[#1C1D23] rounded-full flex justify-center items-center text-[16px] 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   font-[700] font-[inter] w-[210px] space-x-3 mr-4" >{t('BuySection.btn1')}</button>
                           </a>
                           <a href="https://t.me/scorpioncasino_official" target="_blank"> 
                           <button className="stepbtnbg text-white w-[140px] justify-center xs:text-[16px]  rounded-full flex items-center 2xl:h-[54px]  xl:h-[54px]  lg:h-[45px] md:h-[45px] sm:h-[45px] h-[45px]   space-x-3 text-[16px] font-[700] font-[inter]" >{t('BuySection.btn2')}</button></a>
                        </div>
               

            </div>

        </div>
    )
}
export default BuySection