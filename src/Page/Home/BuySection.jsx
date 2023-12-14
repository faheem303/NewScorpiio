import React from "react";


import Buyimg from "../../assects/images/buysec.png"




const BuySection = () => {
    return (
        <div className="  xs:py-8  " >
            <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p>
            <h2 className="text-[40px] xs:text-[40px] xs:text-left sm:text-left uppercase text-center font-[900] gradientText  font-[Inter] leading-[40px]">HOW TO BUY?</h2>
            <div className="pt-[31px] w-full block xs:space-y-3 sm:space-y-3 md:space-y-3 justify-between 2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
                <div className="2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[32%] sm:w-full w-full  space-y-5 ">
                    <div className="stepsbg py-4 px-8 rounded-[40px]">
                        <h3 className="text-[20px] xs:text-[18px]  font-[700] leading-[31px] font-[Poppins] gradientText">Step 1
                        </h3>
                        <h4 className="text-[21px] gradientText xs:text-[16px] font-[900] font-[Inter] text-white text-white leading-[33px] ">Connect your Wallet</h4>
                        <p className=" text-[18px] text-[white] leading-[21px] font-[400] font-[Poppins] leading-[27px]">Use Metamask or Trust Wallet to connect your wallet in seconds.</p>
                    </div>
                    <div className="stepsbg py-4 px-8 rounded-[40px]">
                        <h3 className="text-[20px] xs:text-[18px]  font-[700] leading-[31px] font-[Poppins] gradientText">Step 2
                        </h3>
                        <h4 className="text-[21px] gradientText xs:text-[16px] font-[900] font-[Inter] text-white text-white leading-[33px] ">Confirm Transaction</h4>
                        <p className=" text-[18px] text-[white] leading-[21px] font-[400] font-[Poppins] leading-[27px]">You can buy $SCORP with USDT, ETH and BNB.</p>
                    </div>
                    <div className="stepsbg py-4 px-8 rounded-[40px]">
                        <h3 className="text-[20px] xs:text-[18px]  font-[700] leading-[31px] font-[Poppins] gradientText">Step 3
                        </h3>
                        <h4 className="text-[21px] gradientText xs:text-[16px] font-[900] font-[Inter] text-white text-white leading-[33px] ">Claim Tokens</h4>
                        <p className=" text-[18px] text-[white] leading-[21px] font-[400] font-[Poppins] leading-[27px]">Congratulations! You can claim your $SCORP after the pre-sale ends.</p>
                    </div>
                    <div className="pt-3 flex mt-14 xs:justify-center sm:justify-center">
                            <button className="bgcolor xs:text-[14px]  text-[#1C1D23] rounded-full flex items-center text-[18px] font-[700] font-[Poppins] px-[33px] space-x-3 mr-4" >Buy $SCORP NOW</button>
                           <button className="stepbtnbg text-white xs:text-[18px]  rounded-full flex items-center h-[64px] px-8 space-x-3 text-[15px] font-[700] font-[Poppins]" >Need Help?</button>
                        </div>
                </div>
                <div className="2xl:w-[67%]  xl:w-[67%] lg:w-[67%] md:w-[67%] sm:w-full w-full">
                    <img className="" src={Buyimg} alt="" />
                </div>
               

            </div>

        </div>
    )
}
export default BuySection