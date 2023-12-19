import React from "react";
import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"




const ExchangeSection = () => {

    return (
        <div className="" >
            <div className="">
                <div className="pb-[64px]">
                    <h3 className=" text-[26px] xs:text-[30px] font-[900] font-[inter]  gradientText uppercase">
                    first top-tier exchange listing reveal
                        </h3>
                        <p className="text-[20px] font-[700] leading-[22px] uppercase gradientText">first top-tier exchange listing reveal</p>
                  
                    
                </div>

               <div className="flex justify-between gap-[11px] 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-5 items-center justify-between xs:block sm:block md:block">
               <div className="exchnagecolor space-y-3 px-[50px] h-[254px]  flex items-center justify-center flex-col rounded-[20px]">
                    <img className="h-[117px] w-[117.051px]" src={exc} alt="" />
                    <p className="text-[22px] text-white">COMING SOON</p>

                </div>
                <div className="exchnagecolor space-y-3 px-[50px] h-[254px]  flex items-center justify-center flex-col rounded-[20px]">
                    <img className="h-[117px] w-[117.051px]" src={exc} alt="" />
                    <p className="text-[22px] text-white">COMING SOON</p>
                </div>
                <div className="exchnagecolor space-y-3 px-[50px] h-[254px]  flex items-center justify-center flex-col rounded-[20px]">
                <img className="h-[117px] w-[117.051px]" src={exc} alt="" />
                <p className="text-[22px] text-white">COMING SOON</p>
                </div>
               </div>
               <p id='scorpion'></p>
            </div>

        </div>
    )
}
export default ExchangeSection 
