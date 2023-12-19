import React from "react";
import Icon1 from "../../assects/images/licimg (1).png";
import Icon2 from "../../assects/images/licimg (2).png";
import Icon3 from "../../assects/images/licimg (3).png";


const SecureSection = () => {
    const SecureData = [
        {
            id: 1,
            image: Icon1,
            title: "Licensed & Regulated Platform",
            subtitle: 'The SCORPION platform is regulated and licensed by the Curacao EGaming Authority.',
        },
        {
            id: 2,
            image: Icon2,
            title: 'Team is KYC Verified',
            subtitle: 'The Scorpion Team has been successfully verified by Assure DeFi the KYC Gold Standard.',
        },
        {
            id: 2,
            image: Icon3,
            title: 'Audited by Solidproof',
            subtitle: 'Scorpion Casino has been fully audited by Solidproof and shown to be 100% secure.',
        },

    ]
    return (
        <div className="" >
            <div className="text-center">
                <h2 className="font-[800] font-[Poppins] text-[34px] xs:text-[30px] gradientText uppercase">100% Secure</h2>
            </div>
            <div className="2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1 gap-y-4 gap-x-5 pt-10">
                {
                    SecureData.map((item, id) => (
                        <div key={id} className=" text-white  bg-[#181718]  py-12 space-y-3 rounded-lg text-center">
                            <div className="flex justify-center">
                                <img src={item.image} alt="" width={70} />

                            </div>
                            <div className="px-10">
                                <h3 className="font-[600] font-[Poppins] text-[19px] xs:text-[16px]">{item.title}</h3>

                                <p className="font-[400] font-[Poppins] text-[14px] xs:text-[13px]">{item.subtitle}</p>



                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default SecureSection 
