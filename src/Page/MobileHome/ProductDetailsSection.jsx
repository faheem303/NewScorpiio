
import React, { useState } from "react";

import ved from "../../assects/video/course-video.mp4"
import Bg from "../../assects/images/bg11.png"
import Iicon from "../../assects/images/i.png";
import Link from "../../assects/images/link.svg";
import Frame from "../../assects/images/Frame.svg";
import Insta from "../../assects/images/insta.svg";
import Twitter from "../../assects/images/twitter1.svg";
import Halo from "../../assects/images/halo.svg";
import eth from "../../assects/images/eth.png";
import eth2 from "../../assects/images/eth2.png";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/bnb.png";
import card from "../../assects/images/cardb.png";
import cardb from "../../assects/images/card.png";
import Arrow from "../../assects/images/arrow-lite.svg";
import Button from '../../components/Button/button';
import poster from "../../assects/images/vedio.png"


// import { useTranslation } from "react-i18next";
import { useTranslation } from 'react-i18next';



const ProductDetailsSection = () => {

    const { t, i18n } = useTranslation();
    const [pop2, setPop2] = useState(false);
    const [pop1, setPop1] = useState(false);

    return (
        <div className='b-[#111010] space-y-4 '>
            <div className=' '>
                <div className="space-y-2 sm:space-y-1 xs:space-y-0">
                    <div className="flex justify-between items-center pt-6 xs:pt-9 " id="realEstate">
                        <div className="">
                            <h3 className='text-[32px] text-center xs:text-[24px] font-[700] font-[poppins] text-white'> BUILDING THE FUTURE OF ONLINE GAMING</h3>
                        </div>
                        <div className="md:auto lg:hidden xl:hidden 2xl:hidden flex pt-[4px] cursor-pointer">

                        </div>

                        <div className="flex space-x-2 md:hidden sm:hidden xs:hidden">

                            <Button classes="border hover:border-2 flex items-center justify-center rounded-md border-[#929292] text-[9px] p-2 w-[33px] h-[24px]" wallet={Link} />

                            <a href='https://www.instagram.com/scorpion.casino/' target="_blank">
                                <Button classes="flex items-center justify-center border hover:border-2 border-[#929292] text-[9px] p-2 w-[33px] h-[24px] rounded-md" wallet={Insta}
                                />
                            </a>
                            <a href='https://twitter.com/ScorpionCasino' target="_blank">

                                <Button classes=" flex items-center justify-center border hover:border-2 border-[#929292] text-[9px] p-2 w-[33px] h-[24px] rounded-md" wallet={Twitter}
                                />
                            </a>
                            <a href='https://t.me/scorpioncasino' target="_blank">

                                <Button classes="flex items-center justify-center border hover:border-2 border-[#929292] text-[9px] p-2 w-[33px] h-[24px] rounded-md" wallet={Arrow}
                                />
                            </a>

                        </div>

                    </div>
                    <h5 className='text-[18px] text-center xs:text-[14px] font-[poppins] text-[#929292]'>Start earning today and receive up to 10,000 USDT in daily passive staking income
from a licensed and regulated global Casino and Betting Platform, no matter the market conditions. </h5>
                </div>
            </div>
            <div className='flex justify-between items- xs:space-y-3 sm:space-y-3 md:space-y-3 xs:block md:block sm:block'>

                <div className="w-[64%] xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
                    <video controls preload="metadata" poster={poster} playsinline className="bgposter h-[567px] xs:h-[230px] sm:h-[330px] md:h-[420px]"  height="100px" width="100%" >
                        <source src={ved} type="video/mp4" />
                    </video>
                </div>
                <div className='w-[34%] xs:w-[100%] sm:w-[100%] md:w-[100%]'>

                    <div className=''>
                        <div className='space-y-2 bgposter'>
                            <div className="px-8 xs:px-10  sm:px-16 md:px-16 py-3 xs:pt-5 sm:pt-5 md:pt-8 ">
                                <h3 className='text-[52px] xs:text-[38px] font-[800] text-center xs:text-center sm:text-center font-[poppins] gradientText'>$284,545.09</h3>
                                <div className='flex justify-between space-x-2'>
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
                                <div className="py-2 space-y-3" >
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
                                        <label htmlFor="" className="text-white xs:text-[14px]">Amount in USD you pay</label>
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-3 px-2 outline-none rounded-l " placeholder="100" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-gray-300">
                                                <img src={eth2} className="pr-2 w-[30px]" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 ">
                                        <label htmlFor="" className="text-white xs:text-[14px]">Amount in $SCORP you receive</label>
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
                            {/* <div className='space-y-2'>
                                <h5 className='font-[poppins] text-[18px] font-[500] text-[#929292]'>Amount</h5>
                                <div className=' flex justify-between items-center bg-[#3F3F3F] rounded-md px-4 '>
                                    <input placeholder="$1000" className='outline-none h-[45px] bg-[#3F3F3F] text-white' type="text" />
                                    <Dropdown />
                                </div>
                            <div className="mt-2 flex justify-center mb-2"> <img src={exc} alt="" className="w-[15px]" /> </div>

                                <div className='flex justify-between items-center  bg-[#3F3F3F] rounded-md px-4 '>
                                    <input placeholder="$1000" className='outline-none h-[45px] bg-[#3F3F3F] text-white' type="text" />
                                    <SelectMetro  />

                                </div>
                                <div className='flex'>
                                    <img src="" alt="" />
                                    <p className='font-[poppins] text-[14px] font-[500] text-[#929292]'>Estimated Amount: 702,876 SCORP</p>

                                </div>
                              
                                <div>
                                    <Button classes="bgcolor w-[100%] font-[600] h-[50px] rounded-[10px]" text="Buy $Scorp Now" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProductDetailsSection;