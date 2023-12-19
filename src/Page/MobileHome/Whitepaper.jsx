import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper1.png"
import CASINO from "../../assects/images/CASINO.png"





const WhitepaperSection = () => {

    return (
        <div className="space-y-[6rem]" >
            <div className="flex items-center justify-between xs:block sm:block md:block xs:space-y-10 sm:space-y-10  md:space-y-10 " >
                <div className="space-y-6 w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center ">
                    <h3 className="font-[poppins] text-[30px] font-[700] text-[white] gradientText xs:text-[30px]">Read the Whitepaper</h3>
                    <h5 className="font-[poppins] text-[16px] text-[white] xs:text-[14px] ">
                        Reading the SCORPION CASINO Whitepaper is a great way to learn
                        more about the unique SCORPION ecosystem and how the $SCORP
                        token can benefit you. It outlines the benefits of the platform and
                        how it's different from other online gambling sites.
                    </h5>
                    <Button text="Read the Whitepaper" classes="bgcolor xs:text-[14px] px-[40px] py-[12px] font-[500]" />


                </div>

                <div className=" w-[49%] xs:w-[100%] sm:w-[100%] md:w-[70%] md:m-auto flex justify-end xs:justify-center sm:justify-center md:justify-center space-y-3" >
                    <img className="w-[auto] h-[600px] xs:h-[300px] sm:h-[400px] md:h-[400px] " src={Whitepaper} alt="" />
                </div>

            </div>


        </div>
    )
}
export default WhitepaperSection
