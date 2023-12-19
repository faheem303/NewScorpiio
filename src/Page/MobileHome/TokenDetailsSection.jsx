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
            <div className="  py-12 xs:py-8 sm:py-8  px-10 lg:px-8 md:px-8 sm:px-8 xs:px-4 token border border-[#e3c88e3d] rounded-[4px] text-white"  >
                <div className="2xl:px-32 xl:px-32 lg:px-15 md:px-6 sm:px-2   ">
                    <center>
                        <div>
                            <h2 className="uppercase font-[800] font-[Poppins] text-[34px] xs:text-[30px] gradientText">Token Details</h2>
                            <p className="leading-[25px] text-[15px] xs:text-[14px] font-[400] font-[Poppins] text-white mb-2 py-4">Use the contract information below to add the $SCORP token to
                                your wallet.
                            </p>
                        </div>
                    </center>

                    <div className="rounded bg-[#382f23c9]  py-6 flex justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4 2xl:hidden xl:hidden">
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
                                <h3 className="text-[14px] font-[800] font-[Poppins] text-white mb-2">Presale Details</h3>
                                <div>
                                    <h3 className="text-[14px]  font-[600] font-[Poppins] text-white ">Token sold during the Pre-sale</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">200,000,000 SCORP </p>
                                </div>

                                <div className="pt-6">
                                    <h3 className="text-[14px]  font-[600] font-[Poppins] text-white ">Current Stage Price</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">1 SCORP  =  $0.01</p>
                                </div>
                                <div className="pt-6">
                                    <h3 className="text-[14px]  font-[600] font-[Poppins] text-white ">Exchange Listing Price</h3>
                                    <p className="text-[13px] font-[400] font-[Poppins] text-white mr-2 mb-2">1 SCORP = $0.05 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden md:hidden sm:hidden xs:hidden">
                        <div className="grid grid-cols-7 gap-1 ">
                            <div className="col-span-4  bg-[#382f23c9] py-6 flex justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4">
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="pb-2">
                                        <h3 className="text-[14px]  font-[600] font-[Poppins] text-white mb-2">Token Name</h3>
                                        <div className="2xl:f3ex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">Scorpion Casino</p>
                                        </div>
                                    </div>
                                    <div >
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Token Sale Stage</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">10 </p>
                                    </div>
                                    <div >
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Token Type</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">BEP-20 (Binance Smart Chain)</p>
                                    </div>
                                    <div >
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Token Symbol</h3>
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block">
                                            <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">SCORP </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Decimal</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">18</p>
                                    </div>

                                </div>

                                <div className=" pt-4">
                                    <h3 className="text-[16px] font-[600] font-[Poppins] text-white xs:text-[14px]">Token Contract Address</h3>
                                    <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                        {/* <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">0x37803ecdcbBF1886CD97A8EAD0DbA4d7291f19A7</p> */}
                                        <div className="2xl:flex xl:flex lg:flex md:flex sm:block block   ">
                                        <p className="text-[15px] sm:text-[13px] xs:text-[13px] md:text-[13px] lg:text-[13px] font-[400] font-[Poppins] text-white mr-2">0xD77401A.......1Bf25dEc07615509E7</p>
                                        <img src={copyIcon} alt="" onClick={handleCopy} width={13} />
                                        <ToastContainer />
                            </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-span-3 bg-[#382f23c9]  flex  justify-between flex-wrap 2xl:px-8 xl:px-8 lg:px-8 md:px-5 sm:px-4 px-4">

                                <div className="pb-2 pt-5 pb-3">
                                    <h3 className="text-[18px]  font-[800] font-[Poppins] text-white mb-2">Presale Details</h3>
                                    <div>
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Token sold during the Pre-sale</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">200,000,000 SCORP </p>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Current Stage Price</h3>
                                        <p className="text-[15px] font-[400] font-[Poppins] text-white mr-2">1 SCORP = $0.01</p>
                                    </div>
                                    <div className="pt-6">
                                        <h3 className="text-[16px] font-[600] font-[Poppins] text-white mb-2">Exchange Listing Price</h3>
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