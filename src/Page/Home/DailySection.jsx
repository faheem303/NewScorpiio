import React from "react";

import Button from "../../components/Button/button";
import Dailyimg from "../../assects/images/dailyimg.png"



const DailySection = () => {
    return (
        <div className="relative z-[2]" >
        <div className="flex items-center justify-between  xs:hidden sm:hidden md:hidden">
            
            <div className="dailyCardbg h-[580px] pt-5 px-3 flex justify-center items-center  2xl:w-[57%] xl:w-[57%] lg:w-[57%] md:w-[100%] sm:w-[100%] w-[100%] mr-auto "   >
                <img className="" src={Dailyimg} alt="" />
            </div>
            <div className="  2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-[20px]">
                <h3 className="text-[43px] xs:text-[43px] pr-4 font-[900] font-[Inter] leading-[40px]  gradientText uppercase">DAILY STAKING REWARDS ARE LIVE NOW</h3>
                <h5 className="text-[18px] font-[inter] font-[400] leading-[28.8px] xs:text-[14px] text-white">Get paid every day even during the pre-sale based on the amount of $SCORP you hold. The faster you buy $SCORP tokens and the more you acquire, the higher your rewards (in USDT and $SCORP) will grow over time. You don’t need to take any action; once you’ve purchased the tokens, they will be automatically staked and can be managed through your personal dashboard (simply click on the wallet icon in the top right corner). Don’t miss this opportunity to be one of the first to enjoy truly passive staking income.</h5>

                <div className="">
                    <Button text="Buy $SCORP" classes=" bgcolor h-[64px] text-[#1C1D23] px-[100px] py-[12px] text-[18px] font-[700] leading-[21px] rounded-full" />
                </div>
                
            </div>
        
        </div>
        <div className="hidden xs:block sm:block md:block">
            
            <div className="  2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-[20px]">
                <h3 className="text-[22px] pr-4 font-[900] font-[Inter] leading-[22px]  gradientText uppercase">DAILY STAKING REWARDS ARE LIVE NOW</h3>
                <h4 className="text-[18px] font-[600] text-white font-[Inter] leading-[20px]">The earlier you buy $SCORP, the more you’ll have on Launch Day</h4>
                <h5 className="text-[16px] font-[Inter] font-[400] leading-[20.8px] xs:text-[14px] text-white">The earlier and more you purchase $SCORP, the greater your rewards in $SCORP and USDT. You don’t need to do anything; once purchased, the tokens are automatically staked and can be managed from your personal dashboard (just click on the wallet icon in the top right corner). Don’t miss out—be among the first to enjoy truly passive staking rewards.</h5>
                
            </div>
            <div className="mobdailybg h-[300px] pt-3 px-3 flex justify-center items-center  2xl:w-[57%] xl:w-[57%] lg:w-[57%] md:w-[100%] sm:w-[100%] w-[100%] mr-auto "   >
                <img className="" src={Dailyimg} alt="" />
            </div>
        
        </div>

    </div>
    )
}
export default DailySection