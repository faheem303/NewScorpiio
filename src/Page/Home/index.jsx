
import React from 'react';

import RewardSection from './RewardsSection';
import BenefitSection from './BenefitsSection';
import BetaSection from './BetaSection';
import BuySection from './BuySection';
import CasinoIndustry from './CasinoIndustry';
import FeaturedSection from './FeaturedSection';
import HowItWork from './HowItWork';
import ProductDetaliSection from './ProductDetailsSection';
import Roadmap from './RoadMap';
import TokenDetailsSection from './TokenDetailsSection';
import TokenomicsSectiion from './TokenomicsSectiion';
import ExchangeSection from './ExchangeSection';
import LicensedCardSection from './LicensedCardSection';
import BiggestSection from './BiggestSetion';
import DailySection from './DailySection';
import Barriers from './Barriers';
import Crypto from './Crypto';
import Gambling from './Gambling';
import Scorp from './Scorp';
import Experts from './Experts';
import BlockChain from './BlockChain';
import Success from './Success';
import Media from './Media';
import PressRelease from './PressRelease';
import PoweredBy from './PoweredBy';
import FaqList from './Faq';
import HugeSection from './HugeSection';
import CommunitySection from './Community';

import icon1 from "../../assects/bgicons/v1.png"
import icon2 from "../../assects/bgicons/v2.png"
import icon3 from "../../assects/bgicons/v3.png"
import icon5 from "../../assects/bgicons/v5.png"
import icon6 from "../../assects/bgicons/v6.png"
import icon7 from "../../assects/bgicons/v7.png"
import icon8 from "../../assects/bgicons/v8.png"
import icon9 from "../../assects/bgicons/v9.png"
import icon10 from "../../assects/bgicons/v10.png"
import icon11 from "../../assects/bgicons/v11.png"
import icon12 from "../../assects/bgicons/v12.png"
import icon13 from "../../assects/bgicons/v13.png"
import icon14 from "../../assects/bgicons/v14.png"




const Home = () => {
    return (
        <div className=' bg-[#111010]  overflow-hidden'>
            <div className='relative z-[2]'>
            <div className='px-[90px] sm:px-10 xs:px-6 '>
                <div id='home' className=''>
                    <ProductDetaliSection />
                </div>
            </div>
            <div className="herobgbox2"></div>
            <div className="herobgbox1"></div>
            </div>
            <div className='py-[60px] xs:py-[30px]'>
                <FeaturedSection />
            </div>
            <div className='bg-element relative'>
                <div className='w-[80%] xs:w-[90%] max-w-[1200px] mx-auto' >
                    <div className='space-y-[95px] xs:space-y-[3rem] sm:space-y-[4rem] md:space-y-[5rem]'>


                        <div>
                            <ExchangeSection />
                        </div>
                        <div>
                            <BetaSection />
                        </div>

                        <div>
                            <LicensedCardSection />
                        </div>
                        <div className='relative'>
                            <BenefitSection />
                            <div className='bg-box1'></div>

                        </div>
                        <div className='relative'>
                            <RewardSection />

                        </div>
                        <div>
                            <BiggestSection />
                            <p className="pb-8 " id='howto' ></p>
                        </div>
                        <div className='relative' >
                            <BuySection />
                            <div className='bg-box3 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                            <div className='bg-box4'></div>
                        </div>
                        <div className='relative'>
                            <DailySection />
                            <div className='bg-box6'></div>
                        </div>
                       <div className='relative z-[2]'>
                        <CommunitySection />
                       </div>

                        <div className='relative' >
                            <HowItWork />
                            <div className='bg-box7'></div>
                            <div className='bg-box7left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                        </div>

                        <div className='relative'>

                            <CasinoIndustry />
                            <div className='bg-box7left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                            <div className='bg-box7left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                        </div>
                        <div className='relative'>
                            <TokenomicsSectiion />
                            <div className='bg-box7'></div>

                        </div>
                        <div className='relative' >
                            <TokenDetailsSection />
                            <div className='bg-box7left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                            <div className='bg-box7left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>

                        </div>
                    </div>


                </div>
               <div className='h-1'>
               <img src={icon6} className='absolute 2xl:w-[220px] xl:w-[170px] lg:w-[160px] md:w-[130px] sm:w-[100px] xs:w-[50px] top-[6.5%] -left-[0%] ' alt="" />
                <img src={icon5} className='absolute 2xl:w-[220px] xl:w-[170px] lg:w-[160px] md:w-[130px] sm:w-[100px] xs:w-[45px] top-[9%] -right-[0%] ' alt="" />
                <img src={icon7} className='absolute 2xl:w-[390px] xl:w-[330px] lg:w-[160px] md:w-[130px] sm:w-[100px] xs:w-[90px] top-[12%] right-[0%] ' alt="" />
                <img src={icon10} className='xs:hidden absolute 2xl:w-[180px] xl:w-[150px] lg:w-[130px] md:w-[110px] sm:w-[80px] xs:w-[45px] top-[15.5%] xs:top-[15.3%] -left-[0%] ' alt="" />
                <img src={icon12} className='absolute block xl:block lg:block md:hidden sm:hidden xs:hidden 2xl:w-[160px] xl:w-[140px] lg:w-[110px] md:w-[90px] sm:w-[70px] xs:w-[50px] top-[20.5%] left-[3%] ' alt="" />
                <img src={icon2} className='absolute block xl:block lg:block md:hidden sm:hidden xs:hidden  2xl:w-[160px] xl:w-[140px] lg:w-[110px] md:w-[90px] sm:w-[70px] xs:w-[50px] top-[20%] right-[0%] ' alt="" />
                <img src={icon13} className='absolute 2xl:w-[400px] xl:w-[380px] lg:w-[380px] md:w-[300px] sm:w-[280px] xs:w-[250px] top-[26.5%] left-[0%] ' alt="" />
                <img src={icon14} className='absolute 2xl:w-[130px] xl:w-[130px] lg:w-[110px] md:w-[100px] sm:w-[180px] xs:w-[80px] top-[27.5%] left-[0%] ' alt="" />
                <img src={icon3} className='absolute 2xl:w-[200px] xl:w-[170px] lg:w-[160px] md:w-[130px] sm:w-[120px] xs:w-[90px] top-[33.5%] right-[0%] ' alt="" />
                <img src={icon9} className='absolute 2xl:w-[210px] xl:w-[210px] lg:w-[180px] md:w-[150px] sm:w-[130px] xs:w-[80px] top-[39.5%] left-[0%] ' alt="" />
                <img src={icon11} className='block xl:block lg:block md:hidden sm:hidden xs:hidden absolute 2xl:w-[110px] xl:w-[110px] lg:w-[110px] md:w-[100px] sm:w-[100px] xs:w-[80px] top-[46.5%] left-[15%] ' alt="" />
                <img src={icon8} className='absolute 2xl:w-[110px] xl:w-[110px] lg:w-[110px] md:w-[100px] sm:w-[100px] xs:w-[80px] top-[73.5%] right-[0%] ' alt="" />
                <img src={icon1} className='absolute 2xl:w-[170px] xl:w-[170px] lg:w-[140px] md:w-[150px] sm:w-[120px] xs:w-[80px] top-[78.5%] left-[0%] ' alt="" />
               </div>

                <div className='relative  py-[35px]'>
                    <div className='relative z-[2]  xl:w-[90%] 2xl:w-[86%] lg:w-[92%] md:w-[92%] sm:-[92%] w-[96%] ml-auto'>
                        <Roadmap />
                    </div>
                    <div className='rmapbg -z-[1]'></div>
                </div>
                <div className='w-[80%] xs:w-[90%] max-w-[1200px] mx-auto'>
                <div className='relative z-[2]'>
                            <HugeSection />
                        </div>
                    <Barriers />
                    <Crypto />
                    <div className='relative z-[2]'>
                        <Gambling />
                        <div className='bg-box8left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>

                    </div>
                    <div className='relative z-[2]'>
                        <Scorp />
                        <div className='bg-box8left 2xl:block xl:block lg:block md:hidden sm:hidden hidden'></div>
                    </div>
                    <div className='relative z-[2]'>
                        <Experts />
                        <div className='bg-box9'></div>
                        <div className='bg-box9left'></div>
                    </div>
                  
                    <div className='relative z-[2]'>
                        <Success />
                        <div className='bg-box10left'></div>
                    </div>
                    <BlockChain />
                    <div className='relative z-[2]'>
                        <Media />
                        <div className='bg-box10'></div>
                    </div>
                </div>
                <PressRelease />
                <div className='relative z-[2]'>
                    <PoweredBy />
                    <div className='bg-box10left'></div>

                </div>

                <div className='relative z-[2]'>
                   <div className='relative z-[10]'>
                   <FaqList />
                   </div>
                    <div className='bg-box10'></div>
                </div>

            </div>


        </div>
    )
}
export default Home;