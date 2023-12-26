
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import ved from "../../assects/video/course-video.mp4"
import Bg from "../../assects/images/bg11.png"
import Iicon from "../../assects/images/i.png";
import Loinp from '../../assects/images/loinp.png'
import Link from "../../assects/svgs/Link1.svg"
import Tree from "../../assects/svgs/tree.svg"
import tei from "../../assects/svgs/twi.svg"
import tel from "../../assects/svgs/tele.svg"
import igrm from "../../assects/svgs/igm.svg"
import eth from "../../assects/images/loinppre (1).png";
import eth2 from "../../assects/images/eth2.png";
import USDT from "../../assects/images/USDT.png";
import BNB from "../../assects/images/loinppre (2).png";
import Button from '../../components/Button/button';
import gc from "../../assects/images/gc.png"
import Solid from "../../assects/images/logo-white-3.png.png"
import poster from "../../assects/images/vedio.png"
import que from "../../assects/svgs/questionIcon.svg"
import refe from "../../assects/svgs/referralIcon.svg"
import Pdf from "../../assects/pdf/Scorpion License (1).pdf"

// import { useTranslation } from "react-i18next";
import { useTranslation } from 'react-i18next';



const ProductDetailsSection = () => {

    const [pop2, setPop2] = useState(false);
    const [pop1, setPop1] = useState(false);
    const [show, setShow] = useState(false);
    const { t } = useTranslation();

    const handelBonus = () => {
        setShow(!show)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText("https://lucent-caramel-6be687.netlify.app/")
          .then(() => {
            toast.success('Copied!');
          })
          .catch((error) => {
            console.error('Error copying:', error);
            toast.error('Failed to copy.');
          });
      };

    return (
        <div className='b-[#111010]  space-y-4 pt-[2.5rem]' id="hero">
            <div className="flex items-center justify-end space-x-3 md:hidden sm:hidden xs:hidden z-[2]">

               <div>
              
               <button className="flex items-center justify-center w-[29px] h-[29px]" onClick={handleCopy}><img className=" rounded-md h-[100%]  text-[9px] " src={Link} alt="" /></button>
                <ToastContainer />
               </div>

                
                    <Button target="_blank" link="https://linkin.bio/scorpioncasino" classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={Tree}
                    />
              
                    <Button target="_blank" link="https://twitter.com/ScorpionCasino" classes=" flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={tei}
                    />
              
                    <Button target="_blank" link="https://t.me/scorpioncasino_official" classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={tel}
                    />
                    <Button target="_blank" link="https://www.instagram.com/scorpion.casino/" classes="flex items-center justify-center   text-[9px] w-[32px] h-[32px] rounded-md" wallet={igrm}
                    />

            </div>

            <div className='flex justify-between lg:space-y-4 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:block xs:block md:block sm:block'>

                <div className="w-[60%] xl:w-[55%] flex flex-col justify-end space-y-[17px] lg:w-[100%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  ">
                    <h5 className="text-[15.5px] leading-[18px] font-[900] gradientText font-[Inter] text-white uppercase">{t('ProductDetails.para1')}</h5>
                    <h3 className="text-[30px] xs:text-[22px] xs:leading-[28px] leading-[32px] font-[Inter] font-[900] gradientText uppercase"> {t('ProductDetails.title1')}</h3>
                    <h5 className="text-[18px] font-[400] leading-[28px] font-[Inter]  text-white ">{t('ProductDetails.para2')}</h5>
                    <button className="herobtnbg rounded-[19px] flex h-[49px] w-[253px] xs:w-[180px] flex justify-center items-center font-[700] text-[21px] xs:text-[14px] text-white">  <img className="mr-2 w-[40px] h-[30px]" src={gc} alt="" /> <a href={Pdf} target="_blank">{t('ProductDetails.verifyBtn')}</a> </button>
                    <div className="flex items-center">
                        <p className="text-[19px] xs:text-[12px] font-[400] font-[Inter] underline text-white">{t('ProductDetails.para3')}</p>
                        <img className="h-[45px] xs:h-[21px] ml-2" src={Solid} alt="" />
                    </div>
                    <div className="pt-[2.2rem] xs:py-[0.8rem] "> 
                        <video controls preload="metadata" poster={poster} playsinline className="bg-filterved rounded-[20px] bgposter max-h-[458px] xs:h-[280px] sm:h-[330px] md:h-[420px] " height="100px" width="100%" >
                            <source src={ved} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='w-[38%] xl:w-[42%] lg:w-[65%] lg:mx-auto flex flex-col justify-end  xs:w-[100%] sm:w-[100%] md:w-[100%] z-[2]'>


                    <div className=' py-[30px]   2xl:px-[52px] xl:px-[45px] lg:px-[32px] md:px-[52px] sm:px-[52px] px-[20px]  bg-filter space-y-4'>
                        <div>
                            <h3 className="2xl:text-[36px] xl:text-[36px] lg:text-[26px] md:text-[26px] sm:text-[28px] text-[24px] font-[700] text-center font-[Inter] 2xl:leading-[60px] xl:leading-[60px]  lg:leading-[35px] md:leading-[60px] sm:leading-[60px] text-white">{t('ProductDetails.card-title')}</h3>
                        </div>
                        <div className=' bgposter '>

                            <div className="bg-[#090909] max-w-[703px] rounded-t-[13px] px-8 xs:px-6  sm:px-16 md:px-16 py-6 xs:pt-5 sm:pt-5 md:pt-8 ">
                                <h3 className='2xl:text-[50px] xl:text-[44px] lg:text-[34px] md:text-[32px] sm:text-[36px] xs:text-[36px] font-[800] text-center font-[Inter] gradientText'>{t('ProductDetails.card-main-amount')}</h3>
                                <div className='flex items-center justify-between space-x-2 '>
                                    <h5 className=' text-center 2xl:text-[16px] xl:text-[14px] lg:text-[13px] md:text-[13px] sm:text-[13px] xs:text-[12px] font-[Inter] text-[#929292]'>{t('ProductDetails.card-goal-raised')}</h5>
                                    <span className="relative">
                                        <button onMouseEnter={() => setPop1(true)} onMouseOut={() => setPop1(false)} type="button" className={`cursor-pointer `}>
                                            <img src={Iicon} alt="" style={{ marginBottom: "-8px", width: "20px" }} />
                                        </button>
                                        <div className={`${pop1 ? 'absolute z-10 w-[220px] right-28 top-[0px] 2xl:right-[0px] xl:right-[0px] lg:right-[0px] 2xl:top-[-56px] xl:-top-[56px] lg:top-[-56px] md:right-[0px] md:top-[-56px] sm:right-[0px] sm:top-[-56px] xs:right-[0px] xs:top-[-56px] text-center py-2 px-3 bg-[#ffffff]  rounded-lg text-[#22222] text-sm' : 'hidden'}`}>
                                            <span className="text-black text-[Inter]">The initial launch price for 1 SCORP is set at $0.1.
                                            </span>
                                            <div className="absolute -z-99 w-5 h-5 -bottom-1 sm:right-[10px] xs:right-[10px] right-[10px] bg-[#ffffff] rotate-45"></div>
                                        </div>

                                    </span>
                                </div>
                                <div>
                                    <div className="z-1 w-full bg-gray-200 rounded-full h-2.5 ">
                                        <div className="bgcolor h-2.5 rounded-full w-[98%]" ></div>
                                    </div>
                                    <p className='text-end text-[12px] font-[Inter] text-[#929292]'>{t('ProductDetails.card-small-amount')}</p>
                                </div>
                                <div>
                                    <h5 className='font-[Inter] text-center text-[18px] xs:text-[18px] font-[500] text-white'>{t('ProductDetails.card-participants')}</h5>
                                    <div>

                                    </div>
                                    <h5 className='font-[Inter] text-center text-[14px] xs:text-[14px]  font-[500] space-x-1 text-[#929292]'>{t('ProductDetails.card-listingPrice')}</h5>


                                </div>
                            </div>
                            <div className='bg-[#3F3F3F] rounded-b-[10px] p-4 xs:pb-5 sm:pb-5 md:pb-8  xs:px-6 sm:px-14 md:px-10 '>
                                <div className="flex justify-between">


                                </div>
                                <div className="py-2 space-y-5" >
                                    <div className="flex space-x-2 items-center justify-center">
                                        <hr className="text-white w-[20%]" />
                                        <h4 className="text-white text-[13px]"> <span className="pr-1">1 SCORP</span>=<span>$0.0714</span></h4>
                                        <hr className="text-white w-[20%]" />
                                    </div>
                                    <div className="2xl:flex justify-between xl:flex lg:block md:block block sm:block xs:space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 ">
                                        <button className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7  xs:py-1  py-2 border hover:border-gray-400">
                                            <div className="flex w-[60px]">
                                            <img src={eth} className="h-[22px] mr-2" alt="" />
                                           <span className="mt-0 contents  w-[30px] "> ETH</span>
                                            </div>
                                        </button>
                                        <button className="flex items-center xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%]  flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7  xs:py-1 py-2 border hover:border-gray-400">
                                            <div className="flex w-[60px]">
                                            <img src={USDT} className="h-[22px] xs:h-[20px] mr-2" alt="" />
                                           <span className="mt-0 contents  w-[30px] "> USDT</span>
                                            </div>
                                        </button>
                                        <button className="flex items-center  xs:h-[40px] sm:h-[40px] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%]  flex justify-center text-white xs:text-[14px] rounded-md space-y-3 px-7  xs:py-1 py-2 border hover:border-gray-400">
                                            <div className="flex w-[60px]">
                                            <img src={BNB} className="h-[25px] mr-2" alt="" />
                                           <span className="mt-0 contents  w-[30px] ">BNB</span>
                                            </div>
                                        </button>

                                    </div>
                                    <div className="space-y-1 ">
                                        <label htmlFor="" className="text-white font-[Inter] xs:text-[14px]">{t('ProductDetails.card-body-amount-pay')}</label>
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-3 px-2 outline-none rounded-l " placeholder="100" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-gray-300">
                                                <img src={USDT} className="pr-2 w-[30px]" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 ">
                                        <label htmlFor="" className="text-white font-[Inter] xs:text-[14px]">{t('ProductDetails.card-body-amount-receive')}</label>
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-3 px-2 outline-none rounded-l " placeholder="100" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-gray-300">
                                                <img src={Loinp} className="pr-2 w-[30px]" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-[100%]">
                                        <Button classes="bgcolor font-[600] w-[100%] py-3 rounded xs:text-[14px]" text={`${t('ProductDetails.card-body-walletBtn')}`} />
                                    </div>
                                    {
                                        show &&
                                        <div className="flex">
                                            <input type="text" className="w-[100%] py-1 px-2 outline-none rounded-l " placeholder="Bonus code" />
                                            <button className="flex items-center text-white rounded-r space-y-3 px-5 py-3 border-l bg-black">
                                                <p className="text-[12px] text-whites font-[700]">{t('ProductDetails.card-body-Bonus-code-apply')}</p>
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="flex justify-between space-x-[15px] pt-[1rem]">
                                
                                <a href="https://master--legendary-gaufre-d9fd23.netlify.app/" className="cursor-pointer text-[14px] xs:text-[11px] font-[500] font-[Inter] leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={que} alt="" /> {t('ProductDetails.card-body-buyBtn')}</a>
                                <button className="cursor-pointer text-[14px] xs:text-[11px] font-[500] font-[Inter] leading-[21px] flex w-[278px] h-[30px] items-center justify-center text-white  rounded-[10px] bg-[#3F3F3F]"> <img className="pr-1 w-[22px] h-[22px]" src={refe} alt="" />{t('ProductDetails.card-body-referralBtn')}</button>

                            </div>

                            {
                                !show &&
                                <div className="py-[1rem]">
                                    <p onClick={handelBonus} className="cursor-pointer text-[#DDD] underline text-center font-[Inter] text-[13px] font-[500] leading-[7px]">{t('ProductDetails.card-body-Bonus-code')}</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default ProductDetailsSection;