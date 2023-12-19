import React from "react";
import Button from "../../components/Button/button";
import Beta from "../../assects/images/beta.png"




const BuyBack = () => {

    return (
        <div className="space-y-4" >
             <div className="space-y-4 border border-white rounded-2xl pt-2 px-5 sm:px-2 xs:px-2 xs:w-[95%] xs:m-auto">
                    <details className="group " > 
                        <summary
                            className="flex sm:block items-center justify-center p-4 cursor-pointer border-b"
                        >
                            <h3 className="pb-[3px] text-[16px] sm:text-[16px] xs:text-[14px] font-[600] text-white pb-4 font-[Poppins] text-start">Buy-Back System</h3>
                            <svg
                                className="flex-shrink-0 text-white ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="text-center text-[14px] text-white font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-4 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                        Scorpion Casino uses a smart contract to purchase $SCORP tokens from public exchanges on a daily basis. These purchases are financed through a portion of the Casino and Betting revenue. During this buying process the $SCORP price goes automatically up.

                        </p>
                    </details>


                </div>
                <div className="space-y-4 border border-white rounded-2xl pt-2 px-5 sm:px-2 xs:px-2 xs:w-[95%] xs:m-auto">
                    <details className="group " > 
                        <summary
                            className="flex sm:block items-center justify-center p-4 cursor-pointer border-b"
                        >
                            <h3 className="pb-[3px] text-[16px] sm:text-[16px] xs:text-[14px] font-[600] text-white pb-4 font-[Poppins] text-start">Automatic Token Burn</h3>
                            <svg
                                className="flex-shrink-0 text-white ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="text-center text-[14px] text-white font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-4 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                        The smart contract automatically burns half of the purchased $SCORP tokens each day. This process reduces the circulating $SCORP supply, which makes the remaining tokens more valuable.

                        </p>
                    </details>


                </div>
                <div className="space-y-4 border border-white rounded-2xl pt-2 px-5 sm:px-2 xs:px-2 xs:w-[95%] xs:m-auto">
                    <details className="group " > 
                        <summary
                            className="flex sm:block items-center justify-center p-4 cursor-pointer border-b"
                        >
                            <h3 className="pb-[3px] text-[16px] sm:text-[16px] xs:text-[14px] font-[600] text-white pb-4 font-[Poppins] text-start">Daily Profits</h3>
                            <svg
                                className="flex-shrink-0 text-white ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="text-center text-[14px] text-white font-Poppins sm:text-[14px] xs:text-[14px] font-[400] px-4 py-4 sm:px-2 xs:px-2  leading-relaxed ">
                        The other half of the tokens obtained through the buyback process will be automatically transferred to the Scorpion Staking Pool. This staking pool then distributes rewards daily to $SCORP holders based on the number of tokens they hold, generating daily profits for them.

                        </p>
                    </details>


                </div>

        </div>
    )
}
export default BuyBack 
