import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copyIcon from "../../assects/svgs/copy-icon-1.png.svg"


const TokenDetailsSection = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText("0xD77401A76d6cDB7Ac3bb031Bf25dEc07615509E7");
        toast(" Contract Address Copied!");
    }

    return (
        <>
            <div className="  pb-12   rounded-[4px] text-white"  >
                <div className=" ">
                    <center>
                        <div>
                            <h2 className="uppercase font-[900] font-[Inter] text-[40px] xs:text-[30px] gradientText">Token Details</h2>
                            <p className="leading-[25px] text-[15px] xs:text-[14px] font-[400] font-[Inter] text-white mb-2 py-4">Use the contract information below to add the $SCORP token to
                                your wallet.
                            </p>
                        </div>
                    </center>


                    <div className="">
                        <div className="space-y-[47px]">
                            <div className=" 2xl:w-[64%] xl:w-[64%] lg:w-[63%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto col-span-4 space-y-3 detailtokenbg py-6 flex justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4">
                                <div className="2xl:flex xl:flex lg:flex md:block sm:block block justify-between w-[100%] ">
                                    <div className="pb-2  2xl:w-[34%] xl:w-[34%] lg:w-[32%] md:w-[100%] sm:w-[100%] w-[100%]">
                                        <h3 className="text-[20px]  font-[600] font-[Inter] text-white mb-2">Token Name</h3>
                                        <div className="2xl:f3ex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Inter] text-white ">Scorpion Casino</p>
                                        </div>
                                    </div>
                                    <div className=" 2xl:w-[32%] xl:w-[32%] lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%]">
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white mb-2">Token Symbol</h3>
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Inter] text-white ">SCORP </p>
                                        </div>
                                    </div>
                                    <div className=" 2xl:w-[34%] xl:w-[34%] lg:w-[32%] md:w-[100%] sm:w-[100%] w-[100%]">
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white mb-2">Token Type</h3>
                                        <p className="text-[14px] font-[400] font-[Inter] text-white ">BEP-20 (Binance Smart Chain)</p>
                                    </div>



                                </div>

                                <div className=" w-[100%] 2xl:flex xl:flex lg:flex md:block sm:block block justify-between 2xl:space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-0 sm:space-x-0 space-x-0 ">
                                    <div className=" 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[90%] sm:w-[90%] w-[90%] space-y-2">
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white xs:text-[14px]">Token Contract Address</h3>
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                            {/* <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Inter] text-white mr-2">0x37803ecdcbBF1886CD97A8EAD0DbA4d7291f19A7</p> */}
                                            <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                                <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Inter] text-white mr-2">0xD77401Aakbcjsibjisbijasb25dEc07615509E7</p>
                                                <img src={copyIcon} className="cursor-pointer" alt="" onClick={handleCopy} width={14} />
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="2xl:w-[34%] xl:w-[34%] lg:w-[32.5%] md:w-[90%] sm:w-[90%] w-[90%]  ">
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white mb-2">Decimal</h3>
                                        <p className="text-[15px] font-[400] font-[Inter] text-white ">18</p>
                                    </div>
                                </div>
                            </div>



                            <div className="col-span-3 detailtokenbg rounded-[30px] px-[60px]">

                                <div className=" py-8 2xl:flex xl:flex lg:flex md:block sm:block block justify-between items-center">
                                    <div className=" h-[90px] 2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:border-r xl:border-r lg:border-r  border-[#F9C333]">
                                        <h3 className="text-[20px]  font-[800] font-[Inter] text-white mb-2">Pre-Sale Details</h3>
                                        <div className="pr-[6rem]">
                                            <h3 className="text-[16px] font-[400] font-[Inter] text-white mb-2">480,000,000 $SCORP tokens will be
                                                sold during the pre-sale. </h3>
                                            
                                        </div>
                                    </div>

                                    <div className="h-[90px] 2xl:w-[30%] xl:w-[30%] flex flex-col justify-start lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:border-r xl:border-r lg:border-r  border-[#F9C333]" >
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white mb-2">Current Stage Price</h3>
                                        <p className="text-[15px] font-[400] font-[Inter] text-white mr-2">1 SCORP = $0.022</p>
                                    </div>
                                    <div className="h-[90px] 2xl:w-[25%] xl:w-[25%] lg:w-[20%] md:w-[100%] sm:w-[100%] w-[100%]">
                                        <h3 className="text-[20px] font-[600] font-[Inter] text-white mb-2">Exchange Listing Price</h3>
                                        <p className="text-[15px] font-[400] font-[Inter] text-white mr-2">1 SCORP = $0.05</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </div>

        </>
    )
}
export default TokenDetailsSection