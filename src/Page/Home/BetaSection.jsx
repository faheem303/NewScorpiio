import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BetaSection = () => {

    return (
        <div className="" >
            <div className="flex items-center justify-between xs:block sm:block md:block">
                
                <div className="filterblurbg h-[400px] p-2 flex justify-center items-center  w-[45%] mr-auto "   >
                    <img className="h-[478px]" src={Beta} alt="" />
                </div>
                <div className=" w-[45%] xs:w-[45%] sm:w-[100%] md:w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-3">
                    <h3 className="text-[40px] xs:text-[30px] font-[700] font-[poppins] leading-[40px]  gradientText uppercase">$SCORP IS THE FUTURE LEADING GAMBLING CRYPTOCURRENCY</h3>
                    <h5 className="text-[18px] font-[Poppins] leading-[28.8px] xs:text-[14px] text-white">The $SCORP token is empowering the SCORPION ecosystem, offering over 30,000 betting opportunities monthly, 210 casino games, and 160 live games on a licensed, transparent, and provably fair platform. Don’t wait – come check us out now!</h5>

                    <div className="pt-[2rem]  ">
                        <Button text="Visit Casino" classes=" bgcolor px-[100px] py-[12px] xs:text-[14px] rounded-full" />
                    </div>
                    
                </div>
            
            </div>

        </div>
    )
}
export default BetaSection 
