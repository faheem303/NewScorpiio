
import React, { useState } from "react";

import ved from "../../assects/video/course-video.mp4"
import Bg from "../../assects/images/bg11.png"
import Iicon from "../../assects/images/i.png";
import Link from "../../assects/svgs/Link1.svg"
import Tree from "../../assects/svgs/tree.svg"
import tei from "../../assects/svgs/twi.svg"
import tel from "../../assects/svgs/tele.svg"
import igrm from "../../assects/svgs/igm.svg"
import eth from "../../assects/images/eth.png";
import eth2 from "../../assects/images/eth2.png";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/bnb.png";
import Button from '../../components/Button/button';
import gc from "../../assects/images/gc.png"
import Solid from "../../assects/images/logo-white-3.png.png"
import poster from "../../assects/images/vedio.png"
import que from "../../assects/svgs/questionIcon.svg"
import refe from "../../assects/svgs/referralIcon.svg"

// import { useTranslation } from "react-i18next";
import { useTranslation } from 'react-i18next';



const ProductDetailsSection = () => {

    const { t, i18n } = useTranslation();
    const [pop2, setPop2] = useState(false);
    const [pop1, setPop1] = useState(false);

    return (
        <div className='b-[#111010] space-y-4 pt-[4.5rem]'>
            <div className="flex justify-end space-x-3 md:hidden sm:hidden xs:hidden">

                <Button classes=" flex items-center justify-center rounded-md  text-[9px] w-[32px] h-[32px]" wallet={Link} />

                <a href='https://www.instagram.com/scorpion.casino/' target="_blank">
                    <Button classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={Tree}
                    />
                </a>
                <a href='https://twitter.com/ScorpionCasino' target="_blank">

                    <Button classes=" flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={tei}
                    />
                </a>
                <a href='https://t.me/scorpioncasino' target="_blank">

                    <Button classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={tel}
                    />
                </a>
                <a href='https://t.me/scorpioncasino' target="_blank">

                    <Button classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={igrm}
                    />
                </a>

            </div>
            <div className='flex justify-between  xs:space-y-3 sm:space-y-3 md:space-y-3 xs:block md:block sm:block'>

                <div className="w-[60%] space-y-[17px]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
                    <h5 className="text-[20px] font-[900] gradientText text-white uppercase">THe world’s first Social Gambling Cryptocurrency </h5>
                    <h3 className="text-[30px] leading-[27px] font-[900] gradientText uppercase">ICONIC CASINO TOKEN LAUNCH IS SET TO DISRUPT THE $450 BILLION GAMBLING INDUSTRY WITH A SHOCKING COMMUNITY REWARD SYSTEM</h3>
                    <h5 className="text-[18px] font-[400] leading-[28px] font-[Poppins]  text-white ">Start earning today and receive up to 10,000 USDT in daily passive staking income from a licensed and regulated global Casino and Betting Platform, no matter the market conditions.</h5>
                    <button className="btnbg rounded-[19px] bordercolor  flex h-[49px] w-[253px] flex justify-center items-center font-[700] text-[21px] text-white">  <img className="mr-2 w-[40px] h-[30px]" src={gc} alt="" /> Verify License</button>
                    <div className="flex items-center">
                        <p className="text-[19px] font-[400] font-[Poppins] underline text-white">Audited & KYC | 100% Secure & Verified</p>
                        <img className="max-w-[146.38px] ml-2" src={Solid} alt="" />
                    </div>
                    <div className="pt-[3.5rem]">
                        <video controls preload="metadata" poster={poster} playsinline className="bgposter max-h-[508px] xs:h-[230px] sm:h-[330px] md:h-[420px] " height="100px" width="100%" >
                            <source src={ved} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='w-[38%] xs:w-[100%] sm:w-[100%] md:w-[100%]'>


                    <div className=' py-[35px] h-[877px]  px-[52px]  bg-filter space-y-4'>
                        <div>
                            <h3 className="text-[36px] font-[700] text-center leading-[66px] text-white">$SCORP Pre-Sale</h3>
                        </div>
                        <div className=' bgposter '>

                            <div className="bg-[#090909] max-w-[703px] rounded-t-[13px] px-8 xs:px-10  sm:px-16 md:px-16 py-6 xs:pt-5 sm:pt-5 md:pt-8 ">
                                <h3 className='text-[50px] xs:text-[38px] font-[800] text-center xs:text-center sm:text-center font-[poppins] gradientText'>$284,545.09</h3>
                                <div className='flex justify-center space-x-2 '>
                                    <h5 className='text-[16px] text-center xs:text-[13px] font-[poppins] text-[#929292]'>2846% of minimum goal raised</h5>
                                    <span className="relative">
                                        <button onMouseEnter={() => setPop1(true)} onMouseOut={() => setPop1(false)} type="button" className={`cursor-pointer `}>
                                            <img src={Iicon} alt="" style={{ marginBottom: "-8px", width: "20px" }} />
                                        </button>
                                        <div className={`${pop1 ? 'absolute z-10 w-[220px] right-28 top-[0px] 2xl:right-[0px] xl:right-[0px] lg:right-[0px] 2xl:top-[-56px] xl:-top-[56px] lg:top-[-56px] md:right-[0px] md:top-[-56px] sm:right-[0px] sm:top-[-56px] xs:right-[0px] xs:top-[-56px] text-center py-2 px-3 bg-[#ffffff]  rounded-lg text-[#22222] text-sm' : 'hidden'}`}>
                                            <span className="text-black">The initial launch price for 1 SCORP is set at $0.1.
                                            </span>
                                            <div className="absolute -z-99 w-5 h-5 -bottom-1 sm:right-[10px] xs:right-[10px] right-[10px] bg-[#ffffff] rotate-45"></div>
                                        </div>

                                    </span>
                                </div>
                                <div>
                                    <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                                        <div className="bgcolor h-2.5 rounded-full w-[98%]" ></div>
                                    </div>
                                    <p className='text-end text-[12px] text-[#929292]'>$10,000</p>
                                </div>
                                <div>
                                    <h5 className='font-[poppins] text-center text-[18px] xs:text-[18px] font-[500] text-white'>580 Participants</h5>
                                    <div>

                                    </div>
                                    <h5 className='font-[poppins] text-center text-[14px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]'>Listing Price = $0.01</h5>


                                </div>
                            </div>
                            <div className='bg-[#3F3F3F] rounded-b-[10px] p-4 xs:pb-5 sm:pb-5 md:pb-8  xs:px-8 sm:px-14 md:px-10 '>
                                <div className="flex justify-between">


                                </div>
                                <div className="py-2 space-y-5" >
                                    <div className="flex space-x-2 items-center justify-center">
                                        <hr className="text-white w-[20%]" />
                                        <h4 className="text-white text-[13px]"> <span className="pr-1">1 SCORP</span>=<span>$0.0714</span></h4>
                                        <hr className="text-white w-[20%]" />
                                    </div>
                                    <div className="flex justify-between xs:block sm:block xs:space-y-2 sm:space-y-2 ">
                                        <button className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7 xs:px-2 xs:py-1  py-2 border hover:border-gray-400">
                                            <img src={eth} className="pr-2" alt="" />
                                            ETH
                                        </button>
                                        <button className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7 xs:px-2 xs:py-1 py-2 border hover:border-gray-400">
                                            <img src={USDT} className="pr-2 w-[26px]" alt="" />
                                            USDT
                                        </button>
                                        <button className="flex items-center  xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7 xs:px-2 xs:py-1 py-2 border hover:border-gray-400">
                                            <img src={BNB} className="pr-2" alt="" />
                                            BNB
                                        </button>

                                    </div>
                                    <div className="space-y-1 ">
                                        <label htmlFor="" className="text-white xs:text-[14px]">Amount in USDT you pay</label>
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-3 px-2 outline-none rounded-l " placeholder="100" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-gray-300">
                                                <img src={eth2} className="pr-2 w-[30px]" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 ">
                                        <label htmlFor="" className="text-white xs:text-[14px]">Amount in $SCORP you receive +</label>
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-3 px-2 outline-none rounded-l " placeholder="100" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-gray-300">
                                                <img src={USDT} className="pr-2 w-[30px]" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-[100%]">
                                        <Button classes="bgcolor w-[100%] py-3 rounded xs:text-[14px]" text="Connect Wallet" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="flex justify-between w-[90%] mx-auto gap-[15px] pt-[1rem]">
                                <button className="text-[14px] font-[500] font-[Poppins] leading-[21px] flex w-[278px] h-[28px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={que} alt="" /> How to buy</button>
                                <button className="text-[14px] font-[500] font-[Poppins] leading-[21px] flex w-[278px] h-[28px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={refe} alt="" /> How to buy</button>

                            </div>
                            <div className="py-[1rem]">
                                <p className="text-[#DDD] underline text-center font-[Poppins] text-[13px] font-[500] leading-[7px]">Bonus code?</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default ProductDetailsSection;