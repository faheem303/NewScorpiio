import React from "react";
import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import hugedes from "../../assects/images/hugedes.png"




const HugeSection = () => {

    return (
        <div className="py-[70px]" >
            <div className="">
                <div className="py-[55px] px-[55px] hugeborder space-y-5 2xl:flex xl:flex items-center justify-between md:hidden sm:hidden hidden">
                    <div className="w-[35%]">
                        <img src={hugedes} alt="" />
                    </div>
                    <div className="w-[58%] space-y-[21px]">
                        <h3 className=" text-[36px] font-[900] leading-[38px] font-[inter]  gradientText uppercase">
                            huge market opportunity
                        </h3>
                        <p className="text-[16px] pb-[21px] opacity-70 leading-[24px] pb-2 text-white">Since 2017, the crypto casino industry has surged in value, now reaching $250 million. But that's just a tiny bit—0.1%—of the huge $263.3 billion online casino market. That market keeps growing by about 8% each year, meaning it gets even bigger, with more billions rolling in. People love Crypto Casinos because they’re easy to use and keep things private. Scorpion Casino sets itself apart by establishing the most extensive community reward system, giving back more to its community than any other casino. This innovative community incentive program, offering daily staking rewards based on the casino's performance, coupled with the $SCORP token and the burn and buy-back mechanism, has the potential to attract thousands of players daily and might push Scorpion Casino to become one of the market leaders.</p>
                    <a href="#home" className="">
                    <button className="bgcolor font-[700] w-[250px] h-[56px] text-[16px] rounded-full">BUY $SCORP NOW</button>
                    </a>
                    </div>


                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block block  space-y-5">
                    <h3 className=" text-[36px] font-[900] leading-[38px] font-[inter]  gradientText uppercase">
                        huge market <br /> opportunity
                    </h3>
                    <p className="text-[20px] opacity-70 pb-2 text-white">Since 2017 the crypto casino market has grown rapidly and latest figures show the crypto casino market is now valued at $250 Million. This represents just under 0.1% of the total Casino
                        market which is currently valued at $263.3 Billion but research has shown Crypto Casinos are rapidly gaining market share from
                        Web2 online casinos due to their ease of access and the ability
                        to keep transactions off bank statements.
                        Currently 80% of online casino games are played on mobile
                        devices with the vast majority of Crypto casinos specifically
                        designed for mobile devices. TG.Casino takes this 1 stage further
                        by being exclusively available on Telegram which has over 1
                        Billion users and is forecasted to rise to 1.5 Billion users in the
                        next 3-5 years.</p>
                    <div className="filterblurbg">
                        <img src={huge} alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}
export default HugeSection 
