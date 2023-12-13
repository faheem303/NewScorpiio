
import React from "react";

import licimg1 from "../../assects/images/licimg (1).png"
import licimg2 from "../../assects/images/licimg (2).png"
import licimg3 from "../../assects/images/licimg (3).png"




const LicensedCardSection = () => {

    return (
        <div className="" >
            <div className="flex items-center justify-between gap-[28px] xs:block sm:block md:block">
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[218px] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[Poppins] -tracking-[1.7px] text-[26px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">Secured Licensed Platform</h3>
                        <p className=" font-[Poppins] text-[12px] font-[400] leading-[20.064px] text-white">The SCORPION platform is regulated and licensed by the
                            Curacao EGaming licensing entity.</p>
                    </div>
                    <div className="">
                        <img className=" w-[136px] h-[134px]" src={licimg1} alt="" />
                    </div>
                </div>
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[218px] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[Poppins] -tracking-[1.7px] text-[26px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">Team is KYC Verified</h3>
                        <p className=" font-[Poppins] text-[12px] font-[400] leading-[20.064px] text-white">The Scorpion Team has been successfully verified by
                            Assure DeFi the KYC Gold Standard.</p>
                    </div>
                    <div className="">
                        <img className=" w-[136px] h-[134px]" src={licimg3} alt="" />
                    </div>
                </div>
                <div className=" rounded-[32px] flex justify-between pl-[32px]  py-[38px] border LicensedCard border-[#FFF89C] h-[218px] max-w-[432px] w-[100%]">
                    <div className="w-[300px] space-y-3">
                        <h3 className="font-[Poppins] -tracking-[1.7px] text-[26px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] font-[700] leading-[35.064px] text-white">Audited by Solidproof</h3>
                        <p className=" font-[Poppins] text-[12px] font-[400] leading-[20.064px] text-white">Scorpion Casino has been fully audited by Solidproof
                            and shown to be 100% secure.</p>
                    </div>
                    <div className="">
                        <img className=" w-[136px] h-[134px]" src={licimg2} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default LicensedCardSection 
