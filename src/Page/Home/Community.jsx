import React from "react";
import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import colan from "../../assects/images/co.png"
import smit from "../../assects/images/smit.svg"
import tel from "../../assects/images/teleg.png"




const CommunitySection = () => {

    return (
        <div className="" >
            <div className="space-y-5">
                <div>
                    <h3 className="text-[30px] leading-[32px] uppercase font-[900] gradientText text-center">$scorp community is earning every day</h3>
                </div>
              <div className="2xl:flex xl:flex lg:flex md:block sm:block block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-6 sm:space-y-6 space-y-6 justify-between">
              <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px]" src={colan} alt="" />
                    <p className="text-[14px] text-[white] opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="h-[52px]" src={smit} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">john smith</h4>
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter]">Wallet Address</p>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />
                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px]" src={colan} alt="" />
                    <p className="text-[14px] text-[white] opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="h-[52px]" src={smit} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">john smith</h4>
                        <p className="text-[#B6BCCC] text-[13px] font-[400] font-[Inter]">Wallet Address</p>
                        <img className="absolute h-[56px] -right-[10%] -bottom-[25%]" src={tel} alt="" />

                    </div>
                  </div>
                </div>
                <div className="commob 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[100%] sm:w-[100%] w-[100%]  ">
                  <div className="commbgmob px-[32px] py-[32px] space-y-4">
                    <img className="h-[25px]" src={colan} alt="" />
                    <p className="text-[14px] text-[white] opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy  Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="flex relative justify-center flex-col items-center">
                        <img className="h-[52px]" src={smit} alt="" />
                        <h4 className="uppercase gradientText text-[15px] font-[900] font-[Inter]">john smith</h4>
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
