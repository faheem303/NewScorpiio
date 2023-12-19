import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BetaSection = () => {

    return (
        <div className="" >
            <div className="flex items-center justify-between xs:block sm:block md:block">
                <div className=" w-[48%] xs:w-[100%] sm:w-[100%] md:w-[100%] pt-[2rem] pb-[5rem] xs:text-center sm:text-center  space-y-3">
                    <h3 className="text-[34px] xs:text-[30px] font-[700] font-[poppins]  gradientText uppercase">$SCORP IS THE FUTURE LEADING GAMBLING CRYPTO CURRENCY</h3>
                    <h5 className="text-[16px] xs:text-[14px] text-white">The $SCORP token is empowering the SCORPION ecosystem, providing more than 30,000 betting opportunities monthly, 210 casino games,
                     and 160 live games with a licensed, transparent, and provable platform.
                      Don't wait - come check us out
                        now!</h5>

                    <div className="pt-[2rem]  ">
                        <Button text="Visit Casino" classes=" bgcolor px-[50px] py-[12px] xs:text-[14px] rounded-md" />
                    </div>
                    
                </div>

                <div className="filterblurbg  xs:h-[300px] xs:m-auto h-[525px] items-end  flex justify-end xs:justify-center sm:justify-center md:justify-center"   >
                    <img className=" xs:h-[352px]" src={Beta} alt="" />
                </div>
                
              
            </div>

        </div>
    )
}
export default BetaSection 
