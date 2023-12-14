import React from "react";
import Button from "../../components/Button/button";
import Frame from "../../assects/images/Frame1.png"
import Sports from "../../assects/images/SPORTS.png"
import CASINO from "../../assects/images/CASINO.png"
import CompIcons from "../../components/compIcons";


import Cham from "../../assects/icons/Cham.png";
import Fifa from "../../assects/icons/Fifa.png";
import MLB from "../../assects/icons/MLB.png";
import NBA from "../../assects/icons/NBA.png";
import NFT from "../../assects/icons/NFT.png";
import UFC from "../../assects/icons/UFC.png";

import Evo from "../../assects/images/evo.png";
import Nov from "../../assects/images/nov.png";
import Net from "../../assects/images/net.png";
import Ama from "../../assects/images/ama.png";
import Go from "../../assects/images/go.png";
import Egt from "../../assects/images/egt.png";
import BuyBackSectionCard from "./BuybackSection";


const imgData2 = [
    {
        id: 7,
        imgName: Evo,
    },
    {
        id: 5,
        imgName: Nov,
    },
    {
        id: 3,
        imgName: Net,
    },
    {
        id: 4,
        imgName: Ama,
    },
    {
        id: 4,
        imgName: Go,
    },
    {
        id: 4,
        imgName: Egt,
    }
]

const imgData = [
    {
        id: 7,
        imgName: Fifa,
    },
    {
        id: 5,
        imgName: Cham,
    },
    {
        id: 3,
        imgName: MLB,
    },
    {
        id: 4,
        imgName: NBA,
    },
    {
        id: 4,
        imgName: NFT,
    },
    {
        id: 4,
        imgName: UFC,
    }
]


const HowItWork = () => {

    return (
        <div className="space-y-[95px] relative z-[2]" >
            <div className="space-y-[60px]">
                <div className="space-y-3 w-[96%] xs:w-[100%] sm:w-[100%] md:w-[100%] m-auto">
                    <h3 className="font-[Inter] text-[43px]  font-[900] leading-[40px] uppercase gradientText text-center">HOW DOES IT WORK?</h3>
                    <h5 className="font-[poppins] text-[18px] font-[400] leading-[28px] text-[#fff] text-[white] text-center">
                        Curious about how the Scorpion Casino ecosystem works? Here’s a simplified explanation. <br />
                        Scorpion Casino is a global Crypto Casino and Sports Betting platform generating daily revenue. This income drives the growth of the $SCORP Token through an integrated daily Buy-Back, Burn and Reward System.</h5>


                </div>

                <div className="flex pb-6 pt-12 filterblurbg justify-center flex-col items-center space-y-3" >
                    <img className=" w-[100%] 2xl:w-[90%] xl:w-[90%] xs:w-[100%] sm:w-[100%] md:w-[100%]" src={Frame} alt="" />

                </div>
            </div>
            <div>
                <BuyBackSectionCard />
            </div>
            <div className=" 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-[5rem] sm:space-y-[5rem] space-y-[5rem] ">
                <div>
                    <div className="flex  xs:block sm:block md:block justify-between 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-[5rem] sm:space-y-[5rem] space-y-[5rem] items-center">

                        <div className="w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-[20px] xs:text-center sm:text-center ">
                            <h3 className="text-[40px] xs:text-[22px] font-[Inter] leading-[40px] uppercase font-[900] gradientText">35+ DIFFERENT SPORTS</h3>
                            <h5 className="text-[18px] xs:text-[14px] font-[Poppins] leading-[28px] font-[400] text-white">SCORPION provides various sporting betting opportunities,
                                including football, tennis, American football, horse racing,
                                basketball, golf, boxing, and MMA.</h5>
                                <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[500] leading-[21px] font-[Poppins]">Buy $SCORP</button>
                        </div>
                        <div className="w-[49%] rounded-[40px] sportsbg h-[420px] flex justify-center items-end xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[470px] pb-[1rem]" src={Sports} alt="" />
                        </div>
                    </div>
            
                </div>
                <div>
                    <div className="flex items-center justify-between xs:flex-col-reverse  sm:flex-col-reverse md:flex-col-reverse ">
                       
                         <div className="w-[49%] rounded-[40px] sportsbg h-[420px] flex justify-center items-end xs:w-[100%] sm:w-[100%] md:w-[100%]">
                            <img className="h-[470px] pb-[1rem]" src={CASINO} alt="" />
                        </div>
                        <div className="w-[49%] 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-[4rem] sm:pb-[4rem] pb-[4rem] xs:w-[100%] sm:w-[100%] md:w-[100%] space-y-[20px] xs:text-center sm:text-center ">
                            <h3 className="text-[40px] xs:text-[22px] font-[Inter] leading-[40px] uppercase font-[900] gradientText">200+  CASINO GAMES</h3>
                            <h5 className="text-[18px] xs:text-[14px] font-[Poppins] leading-[28px] font-[400] text-white">SCORPION offers a complete online casino with over 200+ games
                                from all major game providers. Casino games include slots,
                                blackjack, roulette, poker, live casino, and more.</h5>
                                <button className="px-[90px] py-4 bgcolor rounded-full text-[18px] font-[500] leading-[21px] font-[Poppins]">Buy $SCORP</button>
                        </div>

                    </div>
                  
                </div>

            </div>

        </div>
    )
}
export default HowItWork 
