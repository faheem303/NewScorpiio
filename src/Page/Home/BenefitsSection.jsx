import React from "react";
import { v4 as uuidv4 } from 'uuid';


import benefits from "../../assects/images/500.png"
import benefits2 from "../../assects/images/credits.png"
import benefits3 from "../../assects/images/259k.png"
import benefits4 from "../../assects/images/daily.png"



const BenefitData = [
    {
        id: 1,
        image: benefits,
        title: 'Lowest',
        title2:"$SCORP Price",
        subtitle: 'During the pre-sale, you can buy $SCORP at its lowest price before it launches on centralized and decentralized exchanges.',
    },
    {
        id: 2,
        image: benefits2,
        title: 'Receive up to 40% casino credits',
        subtitle: 'Receive up to 40% free credits to play on Scorpion.Casino - no conditions or obligations attached!',
    },
    {
        id: 3,
        image: benefits3,
        title: '250K giveaway participation',
        subtitle: 'Participate in our 250k Giveaway and go all out to win big! This event is exclusively available for Pre-Sale $SCORP buyers.',
    },
    {
        id: 4,
        image: benefits4,
        title: 'daily passive staking income',
        subtitle: 'Get daily passive staking income automatically added to your wallet - even during the pre-sale period!',
    },
   
]

const BenefitSection = () => {
    return (
        <div className="" >
            <div className="text-center pb-[48px]">
                <h2 className="font-[900] font-[Inter] leading-[40px] text-[40px] xs:leading-[30px] xs:text-[26px] gradientText uppercase">BENEFITS OF BUYING $SCORP IN THE PRE-SALE</h2>
            </div>
            <div className="2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2
             sm:grid sm:grid-cols-2 grid grid-cols-1 gap-y-4 gap-x-5 ">
                {
                    BenefitData.map((item, id) => (
                        <div key={id} className="text-white text-center z-[2] benefitCardbg px-4 py-6 space-y-3 border border-[#e3c88e3d] rounded-lg">
                           
                            <div className="2xl:h-[140px] xl:h-[150px] lg:h-[160px] md:h-[200px] sm:h-[200px] h-[139px]">
                            <h3 className="font-[900] font-[Inter] uppercase text-[24px] px-4 leading-[30px] gradientText pb-2">{item.title} <br /> {item.title2}</h3>
                            <p id="howtobuy" className="text-center font-[400] font-[Inter] text-[14px] xs:text-[13px] text-[#FFF] xs:px-8">{item.subtitle}</p>
                            </div>
                            <div className="flex justify-center items-center 2xl:h-[234px] xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[121px]">
                            <img src={item.image} alt=""  className="2xl:h-[234px] xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[139px]"/>
                            </div>

                        </div>
                    ))
                }
          
            </div>

        </div>
    )
}
export default BenefitSection 
