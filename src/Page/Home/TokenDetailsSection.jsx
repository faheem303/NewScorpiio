import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copyIcon from "../../assects/images/company/icons/copy-solid.svg"


const TokenDetailsSection = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText("0xD77401A76d6cDB7Ac3bb031Bf25dEc07615509E7");
        toast(" Contract Address Copied!");
    }

    return (
        <>
            <div className="  py-12   rounded-[4px] text-white"  >
                <div className=" ">
                    <center>
                        <div>
                            <h2 className="uppercase font-[800] font-[Poppins] text-[34px] xs:text-[30px] gradientText">Token Details</h2>
                            <p className="leading-[25px] text-[15px] xs:text-[14px] font-[400] font-[Poppins] text-white mb-2 py-4">Use the contract information below to add the $SCORP token to
                                your wallet.
                            </p>
                        </div>
                    </center>

                    <div className="rounded   py-6 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4 2xl:hidden xl:hidden">
                        <div className="">
                            <div className="pb-2">
                                <h3 className="text-[16px] xs:text-[14px] font-[600] font-[Poppins] text-white ">Token Name</h3>
                                <p className="text-[15px] xs:text-[13px] font-[400] font-[Poppins] text-white mb-2 mr-2">Scorpion Casino</p>
                            </div>
                            <div >
                                <h3 className="text-[16px] xs:text-[14px] font-[600] font-[Poppins] text-white ">Token Sale Stage</h3>
                                <p className="text-[15px] xs:text-[13px] font-[400] font-[Poppins] text-white mb-2 mr-2">10</p>
                            </div>
                            <div >
                                <h3 className="text-[16px] xs:text-[14px] font-[600] font-[Poppins] text-white ">Token Type</h3>
                                <p className="text-[15px] xs:text-[13px] font-[400] font-[Poppins] text-white mb-2 mr-2">BEP-20 (Binance Smart Chain)</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] xs:text-[14px] font-[600] font-[Poppins] text-white ">Token Symbol</h3>
                                <p className="text-[15px] xs:text-[13px] font-[400] font-[Poppins] text-white mb-2 mr-2">SCORP</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] xs:text-[14px] font-[600] font-[Poppins] text-white ">Decimal</h3>
                                <p className="text-[15px] xs:text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">18</p>
                            </div>


                        </div>

                        <div>
                            <h3 className="text-[16px] font-[600] font-[Poppins] text-white ">Token Contract Address</h3>
                            <div className="2xl:flex xl:flex lg:flex md:flex flex  ">
                                <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">0xD77401A76d6c.....5dEc07615509E7</p>
                                <img src={copyIcon} alt="" onClick={handleCopy} width={13} />
                                <ToastContainer />

                            </div>
                        </div>


                        <div className="col-span-3  flex  justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-0 sm:px-0 ">

                            <div className="pb-2 py-2 pt-5">
                                <h3 className="text-[20px] font-[800] font-[Poppins] text-white mb-2">Presale Details</h3>
                                <div>
                                    <h3 className="text-[14px]  font-[600] font-[Poppins] text-white ">Token sold during the Pre-sale</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">200,000,000 SCORP </p>
                                </div>

                                <div className="pt-6">
                                    <h3 className="text-[20px]  font-[600] font-[Poppins] text-white ">Current Stage Price</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">1 SCORP  =  $0.01</p>
                                </div>
                                <div className="pt-6">
                                    <h3 className="text-[20px]  font-[600] font-[Poppins] text-white ">Exchange Listing Price</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">1 SCORP = $0.05 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden md:hidden sm:hidden xs:hidden">
                        <div className="space-y-[47px]">
                            <div className="w-[63%] mx-auto col-span-4 space-y-3 detailtokenbg py-6 flex justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4">
                                <div className="flex justify-between w-[100%] ">
                                    <div className="pb-2 w-[32%]">
                                        <h3 className="text-[20px]  font-[600] font-[Poppins] text-white mb-2">Token Name</h3>
                                        <div className="2xl:f3ex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white ">Scorpion Casino</p>
                                        </div>
                                    </div>
                                    <div className="w-[30%]">
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white mb-2">Token Symbol</h3>
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white ">SCORP </p>
                                        </div>
                                    </div>
                                    <div className="w-[32%]">
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white mb-2">Token Type</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white ">BEP-20 (Binance Smart Chain)</p>
                                    </div>



                                </div>

                                <div className="flex w-[100%] justify-between space-x-10">
                                    <div className="w-[63%] space-y-2">
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white xs:text-[14px]">Token Contract Address</h3>
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                            {/* <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">0x37803ecdcbBF1886CD97A8EAD0DbA4d7291f19A7</p> */}
                                            <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                                <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">0xD77401Aakbcjsibjisbijasb25dEc07615509E7</p>
                                                <img src={copyIcon} alt="" onClick={handleCopy} width={13} />
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[32.5%] pl-[rem]">
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white mb-2">Decimal</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white ">18</p>
                                    </div>
                                </div>
                            </div>



                            <div className="col-span-3 detailtokenbg rounded-[30px] px-[60px]">

                                <div className=" py-8 flex justify-between items-center">
                                    <div className="w-[35%] border-r border-[#F9C333]">  
                                    <h3 className="text-[20px]  font-[800] font-[Poppins] text-white mb-2">Presale Details</h3>
                                    <div>
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Token sold during the Pre-sale</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">200,000,000 SCORP </p>
                                    </div>
                                    </div>

                                    <div className="py-4 w-[30%] border-r border-[#F9C333]" >
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white mb-2">Current Stage Price</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">1 SCORP = $0.01</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <h3 className="text-[20px] font-[600] font-[Poppins] text-white mb-2">Exchange Listing Price</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">1 SCORP = $0.05</p>
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