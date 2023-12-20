import React from "react";
import bit from "../../assects/images/exbox.png"
import exc from "../../assects/icons/ex1.png"




const ExchangeSection = () => {

    return (
        <div className="" >
            <div className="">
                <div className="pb-[64px]">
                    <h3 className="text-center text-[40px] xs:text-[30px] font-[900] font-[inter]  gradientText uppercase">
                    Exchange, Partnerships & Listing Media
                        </h3>
                  
                    
                </div>

               <div className="flex justify-between gap-[11px] 2xl:space-y-0 xl:space-y-0 lg:space-y-0  md:space-y-5 sm:space-y-5 space-y-5 items-center justify-between xs:block sm:block md:block">
               <div className="exchnagecolor 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%]  h-[244px]  xs:h-[196px] flex items-center justify-center rounded-[20px]">
                    <img className="h-[150px]" src={bit} alt="" />
                </div>
                <div className="exchnagecolor 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%]  h-[244px]  xs:h-[196px] flex items-center justify-center rounded-[20px]">
                    <img className="h-[117px]  w-[117.051px]" src={exc} alt="" />
                </div>
                <div className="exchnagecolor 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[80%] sm:w-[80%] w-[100%%]  h-[244px] xs:h-[196px] flex items-center justify-center rounded-[20px]">
                    <img className="h-[117px]  w-[117.051px] " src={exc} alt="" />
                </div>
               </div>
               <p id='scorpion'></p>
            </div>

        </div>
    )
}
export default ExchangeSection 
