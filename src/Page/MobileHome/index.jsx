
import React from 'react';
import RewardSection from './RewardsSection';
import BenefitSection from './BenefitsSection';
import BetaSection from './BetaSection';
import BuySection from './BuySection';
import CasinoIndustry from './CasinoIndustry';
import CasinoOwnerSection from './CasinoOwnerSection';
import FaqSectiion from './FaqSection';
import FeaturedSection from '../Home/FeaturedSection';
import FutureSection from './Future';
import HowItWork from './HowItWork';
import OpportunitySection from './OpportunitySection';
import PoweredBySection from './PoweredBySection';
import ProductDetaliSection from './ProductDetailsSection';
import Roadmap from './RoadMap';
import SecureSection from './SecureSection';
import TokenDetailsSection from './TokenDetailsSection';
import TokenomicsSectiion from './TokenomicsSectiion';
import WhitepaperSection from './Whitepaper';
import BuyBack from './Buycol';
import DailySection from '../Home/DailySection';
import Experts from '../Home/Experts';
import BlockChain from '../Home/BlockChain';
import Media from '../Home/Media';
import PressRelease from '../Home/PressRelease';
import ExchangeSection from './Exchange';
import HugeSection from './HugeSection';
import CommunitySection from './Community';




const Mobilehome = () => {
    return (
        <div className=' bg-[#111010] '>
            <div className='px-20 sm:px-10 xs:px-6 '>
                    <div id='home'>
                        <ProductDetaliSection />
                    </div>
            </div>
            <div className='py-[2rem] xs:py-[2rem] sm:py-[2rem] md:py-[2rem]'>
                <FeaturedSection />
            </div>
            <div className='px-20 sm:px-10 xs:px-6  ' >
                <div className='space-y-[7rem] xs:space-y-[3rem] sm:space-y-[4rem] md:space-y-[5rem]'>
                    <div>
                        <ExchangeSection />
                    </div>
                    <div>
                        <SecureSection />
                    </div>
                    <div>
                        <HugeSection />
                    </div>
                    <div>
                        <CommunitySection />
                    </div>
                    <div>
                        <BetaSection />
                    </div>
                    <div>
                        <BenefitSection />
                    </div>
                    <div>
                        <RewardSection />
                    </div>
                    <div>
                        <BuySection />
                    </div>
                    <div>
                        <DailySection />
                    </div>
                    
                    <div >
                        <HowItWork />
                    </div>
                   
                    <div>
                        <CasinoIndustry />
                    </div>
                    <p id="tokenomics"></p>
                    <div>
                        <TokenomicsSectiion />
                    </div>
                    <div>
                        <TokenDetailsSection />
                    </div>
                    <div>
                        <Roadmap />
                    </div>
                    <div>
                        <CasinoOwnerSection />
                    </div>
                    <div>
                        <OpportunitySection />
                    </div>
                    <div>
                        <Experts/>
                    </div>
                    <div>
                        <BlockChain/>
                    </div>
                    <div>
                        <Media />
                    </div>
                    <div>
                        <PressRelease />
                    </div>

                </div>
            </div>
            <div>
              <FeaturedSection />
             
             </div>
             <div className='px-20 sm:px-10 xs:px-6 py-6 space-y-10' >
                <div>
                 <FaqSectiion />
                </div>
            </div>
        </div>
    )
}
export default Mobilehome;