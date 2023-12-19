import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper1.png"
import Design from "../../assects/images/gambling.png"
import Market from "../../assects/images/scorpImg.png"






const OpportunitySection = () => {

    return (
        <div className="  space-y-[5rem] xs:space-y-[3rem]" >
            <div>
                {/* <h3 className=" text-[34px] xs:text-[22px] text-center font-[800] gradientText">THIS IS A NEVER-SEEN OPPORTUNITY</h3> */}
            </div>
            <div className="flex xs:block sm:block md:block justify-between items-center space-y-3 ">

                <div className="space-y-6 w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center  ">
                    <h3 className="font-[poppins] text-[32px] xs:text-[30px] font-[800] gradientText ">ONLINE GAMBLING IS THE FUTURE</h3>
                    <h5 className="text-white font-[600] font-[poppins] text-[18px] xs:text-[16px]">Gambling is one of the oldest and most lucrative industries in the
                        history of mankind and digitization is just the next logical step.  </h5>
                    <p className="font-[poppins] text-[16px] xs:text-[14px] text-white">
                        People have been gambling for the last 3,000 years, regardless of
                        location, time, or market conditions. Gambling is hard-wired in
                        human psychology. This makes an online gambling platform one
                        of the most interesting opportunities to generate cash flow with
                        passive staking income, and build long-term wealth.</p>
                    {/* <Button text="JOIN THE $SCORP WHITELIST" classes="bgcolor px-[40px] py-[12px] font-[500]" /> */}


                </div>
                <div className=" w-[43%]  xs:w-[100%] sm:w-[100%] md:w-[100%]  flex  space-y-3" >
                    <img className="w-[100%] " src={Design} alt="" />
                </div>


            </div>
            <div className="2xl:flex pb-[5rem]  xl:flex flex xs:flex sm:flex md:flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse justify-between items-center space-y-3 ">

                <div className=" w-[49%] xs:pt-5 sm:pt-5 md:pt-5  xs:w-[100%] sm:w-[100%] md:w-[100%]  flex  " >
                    <img  className="w-[100%] " src={Market} alt="" />
                </div>

                <div className=" space-y-6 w-[43%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center  ">
                    <h3 className="font-[poppins] text-[32px] xs:text-[30px] font-[800] gradientText ">WHAT IS $SCORP?</h3>
                    <h5 className="text-white font-[600] font-[poppins] text-[18px] xs:text-[16px]">More than a simple Casino Token</h5>
                    <p className="font-[poppins] text-[16px] xs:text-[14px] text-white">The $SCORP token is the one-stop token that will facilitate all
                        forms of gaming with a licensed, transparent, and provably fair
                        crypto platform. It comes with different advantages and use
                        cases. Crypto casinos are booming, and it's your turn to benefit.</p>
                    <ul className="text-white xs:text-center sm:text-center md:text-center space-y-2 ">
                        <li>Payment method for Casino</li>
                        <li>Passive income for holding $SCORP</li>
                        <li>Weekly Bonus and Free Games</li>
                        <li>Affiliate Reward System </li>
                        <li>And Much More….  </li>
                    </ul>
                    <Button link="#home" text="BUY $SCORP NOW" classes="bgcolor xs:text-[14px] px-[40px] py-[12px] font-[500]" />


                </div>



            </div>


        </div>
    )
}
export default OpportunitySection
