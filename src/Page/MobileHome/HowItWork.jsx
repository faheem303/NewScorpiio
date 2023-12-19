import React from "react";
import Button from "../../components/Button/button";
import Frame from "../../assects/images/Frame1.png"
import Sports from "../../assects/images/SPORTS.png"
import CASINO from "../../assects/images/CASINO.png"

import BuyBack from "./Buycol";





const HowItWork = () => {

    return (
        <div className=" xs:py-8   space-y-[5rem]" >
            <div className="space-y-4 ">
                <div className="space-y-3 w-[80%] xs:w-[100%] sm:w-[100%] md:w-[100%] m-auto">
                    <h3 className="font-[poppins] text-[30px] xs:text-[30px] font-[700] gradientText text-center">HOW DOES IT WORK?</h3>
                    <h5 className="font-[poppins] text-[16px] xs:text-[14px] text-[white] text-center">
                        Curious about how the Scorpion Casino System works? Regardless of
                        market conditions, the value of $SCORP token can grow provided
                        that the sell volume is low, and the casino is profitable. This is
                        achieved through the daily Scorpion Casino Income, which is used to
                        buy up $SCORP and then distribute half to the holders while burning
                        the other half. </h5>
                    <br />
                    <h5 className="font-[poppins] text-[16px] xs:text-[14px] text-[white] text-center">
                        This process has two significant benefits. Firstly, it boosts the price
                        and value of the SCORP tokens by purchasing them, and secondly, it
                        decreases the number of tokens in circulation by burning them. By
                        repeating this process, the remaining SCORP Tokens in circulation
                        appreciate in value, making them an opportunity with high-growth
                        potential.
                    </h5>
                </div>

                <div className="flex  justify-center flex-col items-center space-y-3" >
                    <img className=" w-[60%] 2xl:w-[50%] xl:w-[50%] xs:w-[100%] sm:w-[100%] md:w-[100%]" src={Frame} alt="" />
                    {/* <Button text="Read the Whitepaper" classes="bgcolor px-[40px] xs:text-[14px] py-[12px] font-[500]" /> */}
                </div>
            </div>
            <div>
                    <BuyBack/>
                    </div>
            <div className="space-y-[8rem] xs:space-y-[4rem]">
                <div>
                    <div className="flex space-y-5 xs:block sm:block md:block justify-between items-center">
                        <div className="filterblurbg h-[260px] flex items-end justify-center p-2 w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[300px]" src={Sports} alt="" />
                        </div>
                        <div className="w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-3 xs:text-center sm:text-center ">
                            <h3 className="text-[30px] xs:text-[22px] font-[poppins] font-[800] gradientText">35+ DIFFERENT SPORTS</h3>
                            <h5 className="text-[16px] xs:text-[14px] font-[poppins] font-[500] text-white">SCORPION provides various sporting betting opportunities,
                                including football, tennis, American football, horse racing,
                                basketball, golf, boxing, and MMA.</h5>
                        </div>
                    </div>
                

                </div>
                <div>
                    <div className="flex  items-center justify-between xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse  ">

                        <div className="w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-3 xs:text-center sm:text-center ">
                            <h3 className="text-[30px] xs:text-[22px] font-[poppins] font-[800] gradientText">200+  CASINO GAMES</h3>
                            <h5 className="text-[16px] xs:text-[14px] font-[poppins] font-[500] text-white">SCORPION offers a complete online casino with over 200+ games
                                from all major game providers. Casino games include slots,
                                blackjack, roulette, poker, live casino, and more.</h5>
                        </div>
                        <div className="filterblurbg h-[330px] flex items-end  p-2 mb-5 w-[49%] flex justify-center xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[370px]" src={CASINO} alt="" />
                        </div>
                    </div>
                   
                </div>

            </div>

        </div>
    )
}
export default HowItWork 
