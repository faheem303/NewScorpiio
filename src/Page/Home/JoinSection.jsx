import React from "react";
import { useTranslation } from "react-i18next";


import bit from "../../assects/icons/ex2.png"
import exc from "../../assects/icons/ex1.png"
import huge from "../../assects/images/hugeimg.png"
import hugedes from "../../assects/images/hugedes.png"




const JoinSection = () => {
    const { t } = useTranslation();


    return (
        <div className="py-[80px] w-[90%] mx-auto" >
            <div className="">
                <div className="py-[55px] space-y-8 ">

                    <div className=" text-center space-y-[21px]">
                        <h3 className="xs:text-center text-[36px] font-[900] leading-[38px] font-[inter]  gradientText uppercase">
                            Join Our $30k minedrop!
                        </h3>
                        <p className="xs:text-center text-[18px] pb-[21px] opacity-70 leading-[24px] pb-2 text-white"> Enter our Gleam competition below to stand a chance to win one of 10 prize allocations, each worth $3,000. We aim to reward our community with $30,000 worth of $BTCMTX tokens in total. Terms and conditions apply.</p>
                        <a href="#home" className="">

                        </a>
                    </div>
                    <div className="p-[30px] w-[60%] mx-auto bg-filter">
                        <iframe
                            title="Gleam Widget"
                            className=""
                            src="https://gleam.io/y4qrs/scorpion-casino-250000-giveaway"
                            width="100%"
                            height="1190px"
                            frameBorder="0"
                            scrolling="no"
                        />
                    </div>

                </div>
              


            </div>

        </div>
    )
}
export default JoinSection 
