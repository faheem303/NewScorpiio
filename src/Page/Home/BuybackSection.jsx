import React from "react";
import yahoo from "../../assects/images/company/yahoo.png";
import Button from "../../components/Button/button";
import vedio from "../../assects/video/4 Days.png"
import buyimg1 from "../../assects/images/buyback (3).png"
import buyimg2 from "../../assects/images/buyback (2).png"
import buyimg3 from "../../assects/images/buyback (1).png"



const BuyBackSectionCard = () => {
    return (
        <>
            <div className="  block justify-between 2xl:flex xl:flex lg:flex md:block sm:block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-3 sm:space-y-3 space-y-3 items-center 2xl:space-x-5 xl:space-x-5 lg:space-x-5 md:space-x-0 sm:space-x-0 space-x-0  " >
              <div className="buybackbg  px-[22px] 2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[100%] sm:w-[100%] w-[100%]  pt-[33px] pb-[40px]">
                <h3 className="xs:pb-3 font-[inter]  text-[28px] font-[600] leading-[36px] gradientText text-center">Buy-Back System</h3>
                <p className="text-[14px] h-[140px] font-[400] text-[#fff] leading-[20px] text-center">Scorpion Casino uses a smart contract to purchase $SCORP tokens from public exchanges on a daily basis. These purchases are financed through a portion of the Casino and Betting revenue. During this buying process the $SCORP price goes automatically up.</p>
                <div className="flex justify-center ">
                  <img className="h-[50px]" src={buyimg1} alt="" />
                </div>
              </div>
              <div className="buybackbg2  px-[22px] 2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[100%] sm:w-[100%] w-[100%]  pt-[33px] pb-[40px]">
                <h3 className="xs:pb-3 font-[inter]  text-[28px] font-[600] leading-[36px] gradientText  text-center">Automatic Token Burn</h3>
                <p className="text-[14px] h-[140px] font-[400] text-[#fff] leading-[20px] text-center">The smart contract automatically burns half of the purchased $SCORP tokens each day. This process reduces the circulating $SCORP supply, which makes the remaining tokens more valuable.</p>
                <div className="flex justify-center ">
                  <img className="h-[50px]" src={buyimg2} alt="" />
                </div>
              </div>
              <div className="buybackbg3  px-[22px] 2xl:w-[33%] xl:w-[33%] lg:w-[33%] md:w-[100%] sm:w-[100%] w-[100%]  pt-[33px] pb-[40px]">
                <h3 className="xs:pb-3 font-[inter]  text-[28px] font-[600] leading-[36px] gradientText  text-center">Daily Profits</h3>
                <p className="text-[14px] h-[140px] font-[400] text-[#fff] leading-[20px] text-center">The other half of the tokens obtained through the buyback process will be automatically transferred to the Scorpion Staking Pool. This staking pool then distributes rewards daily to $SCORP holders based on the number of tokens they hold, generating daily profits for them.</p>
                <div className="flex justify-center ">
                  <img className="h-[50px]" src={buyimg3} alt="" />
                </div>
              </div>
            </div>

        </>
    )
}
export default BuyBackSectionCard