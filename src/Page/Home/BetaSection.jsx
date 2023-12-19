import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BetaSection = () => {

    return (
        <div className="xs:pt-8" >
            <div className=" 2xl:flex xl:flex lg:flex items-center justify-between block sm:block md:block">
                
                <div className="filterblurbg h-[400px]  flex justify-center items-center  2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]  mr-auto "   >
                    <img className="h-[478px]" src={Beta} alt="" />
                </div>
                <div className=" 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] py-[2rem] xs:text-center sm:text-center  space-y-3">
                    <h3 className="text-[40px] xs:text-[25px] font-[900] font-[inter] leading-[40px] xs:leading-[28px]  gradientText uppercase">$SCORP IS THE FUTURE LEADING GAMBLING CRYPTOCURRENCY</h3>
                    <h5 className="text-[18px] font-[inter] leading-[28.8px] xs:text-[14px] text-white">The $SCORP token is empowering the SCORPION ecosystem, offering over 30,000 betting opportunities monthly, 210 casino games, and 160 live games on a licensed, transparent, and provably fair platform. Don’t wait – come check us out now!</h5>

                    <div className="pt-[2rem]  ">
                        <Button text="Visit Casino" classes="font-[700] bgcolor px-[100px] py-[12px] xs:text-[14px] rounded-full" />
                    </div>
                    
                </div>
            
            </div>

        </div>
    )
}
export default BetaSection 
