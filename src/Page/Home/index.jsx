
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




const Home = () => {
    return (
        <div className=' bg-[#111010] overflow-hidden'>
            <div className='px-[90px] sm:px-10 xs:px-6 '>
                <div id='home'>
                    <ProductDetaliSection />
                </div>
            </div>
            <div className='py-[60px]'>
            <FeaturedSection />
            </div>
            <div className='bg-element'>
                <div className='w-[84%] max-w-[1300px] mx-auto' >
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
                        <div>
                            <RewardSection />
                        </div>
                        <div>
                            <BiggestSection />
                        </div>
                        <div className='relative'>
                            <BuySection />
                            <div className='bg-box3'></div>
                            <div className='bg-box4'></div>
                        </div>
                        <div className='relative'>
                            <DailySection />
                            <div className='bg-box6'></div>
                        </div>

                        <div className='relative'>
                            <HowItWork />
                            <div className='bg-box7'></div>
                            <div className='bg-box7left'></div>
                        </div>

                        <div className='relative'>
                       
                            <CasinoIndustry />
                            <div className='bg-box7left'></div>
                            <div className='bg-box7left'></div>
                        </div>
                        <p id="tokenomics"></p>
                        <div className='relative'>
                            <TokenomicsSectiion />
                            <div className='bg-box7'></div>

                        </div>
                        <div className='relative'>
                            <TokenDetailsSection />
                            <div className='bg-box7left'></div>
                            <div className='bg-box7left'></div>

                        </div>
                    </div>


                </div>

                <div className='relative  py-[35px]'>
                    <div className='xl:w-[92%] 2xl:w-[88%] lg:w-[92%] md:w-[92%] sm:-[92%] w-[96%] ml-auto'>
                        <Roadmap />
                    </div>
                    <div className='rmapbg'></div>
                </div>
                <div>
                    <Barriers />
                    <Crypto />
                   <div className='relative'>
                     <Gambling />
                     <div className='bg-box8left'></div>
                 
                   </div>
                   <div className='relative'>
                   <Scorp />
                    <div className='bg-box8left'></div>
                   </div>
                   <div className='relative'>
                    <Experts />
                    <div className='bg-box9'></div>
                    <div className='bg-box9left'></div>
                   </div>
                    <BlockChain />
                   <div className='relative'>
                   <Success />
                   <div className='bg-box10left'></div>
                   </div>
                   <div className='relative'>
                    <Media />
                    <div className='bg-box10'></div>
                   </div>
                    <PressRelease />
                   <div className='relative'>
                   <PoweredBy />
                   <div className='bg-box10left'></div>

                   </div>

                <div className='relative'>
                <FaqList /> 
                <div className='bg-box10'></div>
                </div>
                </div>
            </div>


        </div>
    )
}
export default Home;