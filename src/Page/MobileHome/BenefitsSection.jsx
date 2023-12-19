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
        title: 'Up to 300% in SCORP',
        subtitle: 'During the presale, you can receive up to 500% in SCORP depending on the stage you participate in.',
    },
    {
        id: 2,
        image: benefits2,
        title: 'Up to 100% Credits on Scorpion.casino',
        subtitle: 'Receive 100% free credits to play on Scorpion.Casino - no conditions or obligations attached!',
    },
    {
        id: 3,
        image: benefits3,
        title: '250k Giveaway Participation',
        subtitle: 'Participate in our 250k Giveaway automatically and go all out to win big!',
    },
    {
        id: 4,
        image: benefits4,
        title: 'Daily Passive Staking Income',
        subtitle: 'Get daily passive staking income straight into your wallet - even during the pre-sale period!',
    },
   
]

const BenefitSection = () => {
    return (
        <div className="" >
            <div className="text-center">
                <h2 className="font-[800] font-[Poppins] text-[34px] xs:text-[30px] gradientText uppercase"> Benefits if you buy $Scorp in pre-sale</h2>
            </div>
            <div className="2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2
             sm:grid sm:grid-cols-2 grid grid-cols-1 gap-y-4 gap-x-5 pt-16">
                {
                    BenefitData.map((item, id) => (
                        <div key={id} className="text-white xs:text-center sm:text-center bg-[#171717] px-4 py-6 space-y-3 border border-[#e3c88e3d] rounded-lg">
                            <div className="xs:flex sm:flex xs:justify-center sm:justify-center ">
                            <img src={item.image} alt=""  className="h-[60px]"/>
                            </div>
                            <h3 className="font-[700] font-[Poppins] text-[18px] xs:text-[16px]">{item.title}</h3>
                            <p id="howtobuy" className="font-[400] font-[Poppins] text-[14px] xs:text-[13px] text-[#5B5B5B]">{item.subtitle}</p>

                        </div>
                    ))
                }
          
            </div>

        </div>
    )
}
export default BenefitSection 
