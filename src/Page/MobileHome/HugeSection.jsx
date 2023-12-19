import React from "react";
import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"




const HugeSection = () => {

    return (
        <div className="" >
            <div className="">
                <div className="pb-[64px] space-y-5">
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
