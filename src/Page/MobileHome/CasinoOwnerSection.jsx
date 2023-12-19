import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"
import Whitepaper from "../../assects/images/Whitepaper1.png"
import Owner from "../../assects/images/barriers.png"
import Study from "../../assects/images/STUDY.png"







const CasinoOwnerSection = () => {

    return (
        <div className=" space-y-[2rem] lg:pb-[2rem] xs:space-y-[3rem]" >
            {/* <div>
                <h3 className="gradientText text-[34px] xs:text-[22px]  text-center font-[800] ">WHY SHOULD YOU BECOME A CASINO OWNER?</h3>
            </div> */}
            <div className="flex justify-between xs:flex sm:flex md:flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse items-center space-y-3  ">
                <div className=" xs:pt-5 sm:pt-5 md:pt-5  w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] flex  xs:justify-center md:justify-center md:justify-center space-y-3" >
                    <img className=" " src={Owner} alt="" />
                </div>
                <div className="space-y-6 xs:space-y-4  w-[43%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center">
                    <h3 className="font-[poppins] text-[30px] font-[800] gradientText uppercase xs:text-[30px]  ">Why Should you buy $SCORP token</h3>
                    <h5 className="text-white font-[600] font-[poppins] text-[18px] xs:text-[16px] ">Breaking Down Barriers to the Casino Industry </h5>
                    <p className="font-[poppins] text-[16px] xs:text-[14px]  text-white">Typically, it takes around 6 months and $2 million USD in capital
                        to launch an online casino. As a result, the gambling industry is
                        often out of reach for those without access to significant capital,
                        contacts, or experience. However, this is no longer the case!
                        Thanks to $SCORP, the world's first social online gambling
                        cryptocurrency, you can now be a part of the rapidly expanding
                        gambling industry without the need for hundreds of thousands of
                        dollars. This innovative currency opens the door for anyone to
                        potentially earn substantial profits in this exciting and lucrative
                        field.</p>
                    {/* <Button text="JOIN THE $SCORP WHITELIST" classes="bgcolor px-[40px] py-[12px] font-[500]" /> */}


                </div>


            </div>
            <div className="flex xs:block sm:block md:block justify-between items-center space-y-3 ">

                <div className="space-y-6 w-[49%] xs:w-[100%] sm:w-[100%] md:w-[100%] xs:text-center sm:text-center ">
                    <h3 className="font-[poppins] text-[30px] font-[800] gradientText xs:text-[30px]  ">CASE STUDY</h3>
                    <h5 className="text-white font-[600] font-[poppins] text-[18px] xs:text-[16px] ">26-year-old crypto casino owner buys a villa for
                        $80 million.</h5>
                    <p className="font-[poppins] text-[16px] xs:text-[14px]  text-white">
                        According to the Guardian, a 26-year-old crypto casino owner,
                        bought the most expensive villa in Australia for a whopping 88
                        million USD after running his casino for only a couple of years with
                        his co-founder. Crypto casinos are booming, and it's your turn to
                        benefit. These results are exceptional and certainly not the standard,
                        but they show this industry's massive potential.
                    </p>
                    {/* <Button link="#home" text="BUY $SCORP NOW" classes="bgcolor px-[40px] xs:text-[14px]  py-[12px] font-[500]" /> */}


                </div>
                <div className="w-[43%] xs:w-[65%] xs:m-auto  xs:h-[auto] 2xl:h-[60vh] xl:h-[60vh] sm:h-[400px] md:h-[400px]  xs:pt-4 sm:w-[100%] md:w-[100%] flex  justify-end xs:justify-center sm:justify-center  md:justify-center space-y-3" >
                    <img className=" " src={Study} alt="" />
                </div>


            </div>


        </div>
    )
}
export default CasinoOwnerSection
