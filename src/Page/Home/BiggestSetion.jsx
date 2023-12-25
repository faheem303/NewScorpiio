import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BiggestSection = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const [showmob, setShowmob] = useState(false);

    const handelShowMore = () => {
        setShow(!show)
    }
    
    const handelShowMoremob = () => {
        setShowmob(!showmob)
    }
    // console.log("check", handelShowMoremob)
    return (
        <div>
            <div className="overflow-scroll scroll  2xl:block xl:block lg:block md:hidden sm:hidden hidden">
                <div className="Biggestbg relative z-[2] w-[100%] min-w-[900px]" >
                    <div className="flex items-center px-[29px] py-[40px] justify-between xs:block sm:block md:block">
                        <div className=" flex ">
                            <h3 className="w-[100%] max-w-[26%] text-[32px] gradientText uppercase font-[900] font-[Inter] leading-[45px] text-white border-r ">{t('BiggestSection.title')}</h3>
                            <p className="w-[80%] text-white text-[18px] font-[inter] pl-5 font-[400] leading-[28px]">{t('BiggestSection.para')}</p>
                        </div>
                    </div>
                    <div className="px-[20px] pb-[40px] 2xl:block xl:block lg:block md:hidden sm:hidden hidden space-y-3">
                        <div className="px-6">
                            <ul className="flex justify-between ">
                                <li className="text-[#F9C333] w-[120px]  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.rank')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.wallet')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.date')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.tx')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.totalBuy')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.nft')}</li>
                                <li className="text-[#F9C333] w-[120px] text-end  text-[18px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.price')}</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >1st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0x589...18e01</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-07-27</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >5</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$100,590.58</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Diamond</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$10,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow2">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0xbbf...c627c</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-11-02</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >1</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$63,560</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$5,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tabalerow3">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px]  py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >3rd</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >0xc6e...62f8e</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >2023-10-06</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >3</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$30,192.16</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#FFF9AD] w-[120px] text-end py-2 text-[18px] font-[600] leading-[28px] font-[inter]" >$3,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >4th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-10-06</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >12</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >5th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                            </ul>
                        </div>
                        {
                            show &&
                            <>

                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >6th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-10-06</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >12</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >7th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >8th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >9th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px]  py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >10th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2023-09-04</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >2</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >Platinum</li>
                                        <li  className="text-[#fff] w-[120px] text-end py-2 text-[18px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                            </>

                        }

                    </div>



                </div>
                
                {
                    !show &&
                    <div  className="flex justify-center pt-[30px]">
                        <button onClick={handelShowMore} className="bgcolor text-[18px] font-[600] font-[inter] h-[64px] px-[44px] rounded-full">{t('BiggestSection.btn')}</button>
                    </div>
                }
              
            </div>
            <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block block space-y-8">
                <div className="text-center space-y-5">
                    <h3 className="gradientText text-[30px] font-[900]">{t('BiggestSection.title')}</h3>
                    <p className="text-[18px] text-white">{t('BiggestSection.para')}</p>
                </div>
                <div className="Biggestbg px-[15px] py-[40px] space-y-3 2xl:hidden xl:hidden lg:hidden md:block sm:block hidblockace-y-3">
                        <div className="px-6">
                            <ul className="flex justify-between ">
                                <li className="text-[#F9C333] w-[120px] text-center text-[12px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.rank')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[12px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.wallet')}</li>
                                <li className="text-[#F9C333] w-[180px] text-center  text-[12px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.totalBuy')}</li>
                                <li className="text-[#F9C333] w-[120px] text-center  text-[12px] font-[800] leading-[28px] font-[inter]" >{t('BiggestSection.price')}</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >1st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >0x589...18e01</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$100,590.58</li>
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$10,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tablerow2">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >2st</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >0xbbf...c627c</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$63,560</li>
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$5,000</li>
                            </ul>
                        </div>
                        <div className="px-6 tabalerow3">
                            <ul className="flex justify-between ">
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >3rd</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >0xc6e...62f8e</li>
                                <li className="text-[#FFF9AD] w-[180px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$30,192.16</li>
                                <li className="text-[#FFF9AD] w-[120px] text-center py-2 text-[12px] font-[600] leading-[28px] font-[inter]" >$3,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >4th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                            </ul>
                        </div>
                        <div className="px-6 ">
                            <ul className="flex justify-between ">
                                <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >5th</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                <li  className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                            </ul>
                        </div>
                        {
                            show &&
                            <>

                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >6th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x9cb...5965b</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$26,103.44</li>
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$2,000</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >7th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >8th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >9th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                                <div className="px-6 ">
                                    <ul className="flex justify-between ">
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >10th</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >0x112...950a6</li>
                                        <li className="text-[#fff] w-[180px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$25,350.69</li>
                                        <li className="text-[#fff] w-[120px] text-center py-2 text-[12px] font-[400] leading-[28px] font-[inter]" >$1,500</li>
                                    </ul>
                                </div>
                            </>

                        }

                    </div>
                 
                    {
                    !show &&
                    <div  className="flex justify-center ">
                        <button  onClick={handelShowMore} className="bgcolor text-[18px] font-[600] font-[inter] h-[50px] px-[44px] rounded-full">{t('BiggestSection.btn')}</button>
                    </div>
                }
              
            </div>
         
        </div>
    )
}
export default BiggestSection 
