import React from "react";


import Scro from "../../assects/svgs/scro.svg"
import BB from "../../assects/svgs/BB1.svg"
import third from "../../assects/svgs/333.svg"
import fourth from "../../assects/svgs/444.svg"
import Abc from "../../assects/svgs/abc.svg"
import Six from "../../assects/svgs/six.svg"
import tbl from "../../assects/svgs/tbl.svg"
import WhitepaperSection from "./Whitepaper";



const CasinoIndustry = () => {


    const TableData = [
        {
            id: 1,
            title: "Accept Crypto"
        },
        {
            id: 1,
            title: "Live Bets"
        },
        {
            id: 1,
            title: "Affiliate System"
        },
        {
            id: 1,
            title: "Own Token"
        },
        {
            id: 1,
            title: "Staking"
        },
        {
            id: 1,
            title: "Passive Income"
        }
    ]


    const TableColDataP = [
        {
            id: 1,
            img: Scro,
            para: "Scorpion",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                    img: tbl,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                    img: tbl,
                },
                {
                    id: 6,
                    img: tbl,
                },
            ]

        },
        {
            id: 2,
            img: BB,
            para: "Bc.Games",
            TableDataCol: [
                {
                    id: 1,
                    img: tbl,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 3,
            img: third,
            para: "Roobit",
            TableDataCol: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 4,
            img: fourth,
            para: "Roobit",
            TableDataCol: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                    img: tbl,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 5,
            img: Abc,
            para: "owl games",
            TableDataCol: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                    img: tbl,
                },
                {
                    id: 4,
                },
                {
                    id: 5,
                    img: tbl,
                },
                {
                    id: 6,
                },
            ]

        },
        {
            id: 6,
            img: Six,
            para: "Stake",
            TableDataCol: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
                {
                    id: 4,
                    img: tbl,
                },
                {
                    id: 5,
                },
                {
                    id: 6,
                },
            ]

        },


    ]


    return (
        <div className=" " >
            <p style={{ top: "-100px", position: "relative" }} id="howItWork"></p>
            <h3 className="text-[30px] text-center font-[700] xs:text-[30px] text-white font-[Poppins] gradientText">DISRUPTING THE GAMBLING INDUSTRY </h3>
            {/* <h5 className="text-[16px] text-center font-[500] text-gray-500 font-[Poppins]">Nothing can compare with us in theScorpion Casino with extremely innovative features.</h5> */}
            <div className=" py-12 xs:py-4 sm:py-6  xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] m-auto   ">

                <div className="flex justify-center   items-end ">
                    <div className="w-[240px] xs:w-[30%] sm:w-[30%] md:w-[30%] lg:w-[30%] mr-4 xs:mr-1">
                        {
                            TableData.map((item, id) => (

                                <div className="text-center xs:text-[8px] xs:font-[500] sm:text-[12px] w-[240px] xs:w-[100%] sm:w-[100%] md:w-[100%]  font-[700]  px-3 xs:px-1  xs:py-2 py-3 tablebg border-b border-l border-r border-[#e3c88e3d] rounded-[4px] text-white"><h5>{item.title}</h5></div>
                            ))
                        }

                    </div>
                    <div className="xs:w-[%]  sm:w-[%] md:w-[%] lg:w-[%] ">

                        <div className="flex  ">
                                <div className="flex">
                                    {
                                        TableColDataP.map((item) => (

                                            <div className="flex flex-col ">


                                                <div className="flex items-center flex-col pb-4">
                                                    <img className="h-[40px] xs:h-[20px] sm:h-[30px] sm:h-[35px]" src={item.img} alt="" />
                                                    <p className="text-white xs:text-[8px] sm:text-[12px] md:text-[12px] ">{item.para}</p>
                                                </div>


                                                <div  className=" ">

                                                    {item.TableDataCol.map((i) => (
                                                        <div
                                                            key={i.id}
                                                            className="  tablebg border-b border-l border-r border-[#e3c88e3d]
                                                     rounded-[4px] w-[150px] xs:w-[38px] sm:w-[55px] md:w-[65px] lg:w-[85px] py-[4px] flex justify-center   text-white"
                                                        >
                                                            <img className="h-[40px] xs:h-[20px] sm:h-[34px] md:h-[40px]" src={i.img} alt="" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                        </div>
                    </div>
                </div>
                <p id="whitepaper"></p>
            </div>
          
            <div  className="pt-[3rem] w-[1155px] m-auto md:w-[100%] sm:w-[100%] xs:w-[100%] lg:w-[100%]">
                <WhitepaperSection />
            </div>
        </div>
    )
}
export default CasinoIndustry