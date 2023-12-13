import React from "react";
import bit from "../../assects/icons/ex2.png"
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

               <div className="flex ustify-between gap-[11px] items-center justify-between xs:block sm:block md:block">
               <div className="exchnagecolor px-[50px] h-[244px]  flex items-center rounded-[20px]">
                    <img className="h-[75px]" src={bit} alt="" />
                </div>
                <div className="exchnagecolor px-[130px] h-[244px]  flex items-center rounded-[20px]">
                    <img className="h-[117px] w-[117.051px]" src={exc} alt="" />
                </div>
                <div className="exchnagecolor px-[130px] h-[244px]  flex items-center rounded-[20px]">
                    <img className="h-[117px] w-[117.051px] " src={exc} alt="" />
                </div>
               </div>
            </div>

        </div>
    )
}
export default ExchangeSection 
