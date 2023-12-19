import React from "react";


import Buyimg from "../../assects/images/buysec.png"




const BuySection = () => {
    return (
        <div className="   xs:py-8 " >
            <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p>
            <h2 className="text-[34px] xs:text-[30px] xs:text-left sm:text-left text-center font-[800] gradientText  font-[Poppins]">HOW TO BUY?</h2>
            <div className="w-full block xs:space-y-3 sm:space-y-3 md:space-y-3 items-center 2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between">
                <div className="2xl:w-[46%] xl:w-[46%] lg:w-[46%] md:w-[46%] sm:w-full w-full  space-y-5">
                    <div className="mt-20 xs:mt-11 sm:mt-11">
                        <h3 className="text-[22px] xs:text-[18px]  font-[600] font-[Poppins] gradientText">Step 1
                        </h3>
                        <h4 className="text-[18px] xs:text-[16px] font-[500] font-[Poppins] text-white leading-[33px] ">Connect your Wallet</h4>
                        <p className="text-[16px] text-[14px] font-[400] font-[Poppins] text-[#5B5B5B] leading-[27px]">Use Metamask or Trust Wallet to connect your wallet in seconds.</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] xs:text-[18px] font-[600] font-[Poppins] gradientText mt-10">Step 2
                        </h3>
                        <h4 className="text-[18px] xs:text-[16px] font-[500] font-[Poppins] text-white  leading-[33px]">Confirm Transaction</h4>
                        <p className="text-[16px] text-[14px] font-[400] font-[Poppins] leading-[27px] text-[#5B5B5B] ">The minimum is $100 and you can choose between USDT, ETH and BNB.</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] xs:text-[18px] font-[600] font-[Poppins] gradientText mt-10">Step 3
                        </h3>
                        <h4 className="text-[18px] xs:text-[16px] font-[500] font-[Poppins] text-white  leading-[33px]">Claim Tokens</h4>
                        <p className="text-[16px] text-[14px] font-[400] font-[Poppins] leading-[27px] text-[#5B5B5B] ">Congratulations! You can claim your $SCORP after the presale ends.</p>
                        <div className="xs:hidden sm:hidden  flex mt-14 xs:justify-center sm:justify-center">
                            <button className="bgcolor xs:text-[14px]  rounded-md flex items-center text-[15px] font-[600] font-[Poppins] py-3 xs:px-5 px-10 space-x-3 mr-4" >Buy Now</button>
                           <button className="bg-gray-400 xs:text-[14px]  rounded-md flex items-center py-3 px-8 xs:px-5 space-x-3 text-[15px] font-[600] font-[Poppins]" >NEW TO CRYPTO?</button>
                        </div>
                    </div>
                </div>
                <div className="2xl:w-[49%]  xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-full w-full">
                    <img className="" src={Buyimg} alt="" />
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:hidden pt-3 flex mt-14 xs:justify-center sm:justify-center">
                            <button className="bgcolor xs:text-[14px]  rounded-md flex items-center text-[15px] font-[600] font-[Poppins] py-3 xs:px-5 px-10 space-x-3 mr-4" >BUY NOW</button>
                           <button className="bg-gray-400 xs:text-[14px]  rounded-md flex items-center py-3 px-8 xs:px-5 space-x-3 text-[15px] font-[600] font-[Poppins]" >NEW TO CRYPTO?</button>
                        </div>

            </div>

        </div>
    )
}
export default BuySection