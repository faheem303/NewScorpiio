import React from "react";
import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import colan from "../../assects/images/co.png"
import smit from "../../assects/images/comm (1).png"
import smit2 from "../../assects/images/comm (3).png"
import smit3 from "../../assects/images/comm (2).png"
import tel from "../../assects/images/teleg.png"




const CommunitySection = () => {

    return (
        <div className="" >
            <div className="space-y-[55px]">
                <div>
                    <h3 className="text-[43px] xs:text-[26px] xs:leading-[30px] leading-[32px] uppercase font-[900] gradientText text-center">The $scorp community is earning every day</h3>
                </div>
              <div className="2xl:flex xl:flex lg:flex md:block sm:block block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-6 sm:space-y-6 space-y-6 justify-between">
              <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[14px] 2xl:h-[125px] xl:h-[150px] lg:h-[175px] md:h-[120px] sm:h-[120px] h-[140px] text-[white] opacity-80">SC hits differently! I just made 5120 USD in around 27 days! Tuned into some AMAs and vibed with the community, but the moment I withdrew the USDT, I could still not believe it. Scorpion's smashing all my expectations.</p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">CryptoLord</h4>
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter]">Wallet Address</p>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />
                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[14px] 2xl:h-[125px] xl:h-[150px] lg:h-[175px] md:h-[120px] sm:h-[120px] h-[140px] text-[white] opacity-80">My new Daily ritual is watching my $SCORP passive income rise every day, with only a hiccup or two (unfortunate casino jackpots). Sitting on 1K+ profits now and thinking of getting the gold membership for some extra USDT. Big thanks to the Scorpion team! </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit2} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">MFX</h4>
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter]">Wallet Address</p>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />

                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob flex flex-col justify-center  px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px] w-[25px]" src={colan} alt="" />
                    <p className="text-[14px] 2xl:h-[140px] xl:h-[150px] lg:h-[175px] md:h-[120px] sm:h-[120px] h-[140px] text-[white] opacity-80">Every day is payday here. Two buddies in, and we're stacking both usdt & $scorp. Expecting around 6-7k in profits on launch day and already cashed out 800+ usdt. 4 years in crypto and have never seen a pre-sale this lit. HODL. </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="border-2 rounded-full border-[#FFD770] h-[53px] w-[52px]" src={smit3} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">Kylian</h4>
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter]">Wallet Address</p>
                        <img className="absolute -right-[10%] h-[56px] -bottom-[25%]" src={tel} alt="" />

                    </div>
                  </div>
                </div>
              </div>


            </div>
        </div>
    )
}
export default CommunitySection 
